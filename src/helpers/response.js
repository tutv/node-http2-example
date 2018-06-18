exports.sendSuccess = (req, res, extended) => result => {
    const data = Object.assign({}, extended, {
        success: true,
        data: result
    });

    return res.send(data);
};

exports.catchError = (req, res, status = 500) => (error) => {
    console.error('RESPONSE_ERROR', error);

    const code = error.code || null;
    const message = typeof error === 'string' ? error : error.message || '';

    const response = {
        success: false,
        message,
    };

    if (code) {
        response.code = code;
    }

    return res.status(status).send(response);
};

exports.sendError = (req, res) => exports.catchError(req, res, 200);
