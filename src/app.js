const express = require('express');
const app = express();
const errorHandler = require('errorhandler');
const logger = require('morgan');
const compression = require('compression');
const cors = require('cors');
const fs = require('fs');
const getEnv = require('./helpers/getEnv');

/**
 * Express configuration.
 */
app.disable('x-powered-by');
app.use(compression());
app.use(logger('dev'));
app.use(cors());
app.use(errorHandler());

app.use(express.static(__dirname + '/public'));

/**
 * Config routes.
 */
app.use(require('./app.routes'));

/**
 * HTTPS Server
 */
const privateKey = fs.readFileSync(__dirname + '/../cert/key.pem', 'utf8');
const certificate = fs.readFileSync(__dirname + '/../cert/cert.pem', 'utf8');

const spdyServer = require('spdy').createServer({
    key: privateKey,
    cert: certificate,
    passphrase: 'aR4Vtxdnluoxqx1H'
}, app);

const portHTTPS = getEnv('/portHTTPS');
spdyServer.listen(portHTTPS, () => {
    console.log(`Listening on port ${portHTTPS}...`);
});