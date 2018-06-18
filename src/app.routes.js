const express = require('express');
const router = express.Router();
const getEnv = require('./helpers/getEnv');


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


    stream.on('error', function (e) {
        console.log(e);
    });
    stream.write('console.log("hello from push stream!");');
    res.end('<h1>Hello</h1><script src="/a.js"></script><script src="/b.js"></script>');
});
router.all('/ping', (req, res) => res.send('pong'));

/**
 * Exports.
 */
module.exports = router;