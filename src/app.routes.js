const express = require('express');
const router = express.Router();
const getEnv = require('./helpers/getEnv');
const fs = require('fs');


/**
 * Register routes.
 */
router.all('/', (req, res) => {
    const stream = res.push('/a.js', {
        status: 200, // optional
        method: 'GET', // optional
        request: {
            accept: '*/*'
        },
        response: {
            'content-type': 'application/javascript'
        }
    });

    const indexHtml = fs.readFileSync(__dirname + '/public/home.html');
    const aFile = fs.readFileSync(__dirname + '/public/a.js');
    stream.end(aFile);

    res.end(indexHtml);
});
router.all('/ping', (req, res) => res.send('pong'));

/**
 * Exports.
 */
module.exports = router;