const {createHash} = require('crypto');

module.exports = (email, size = 200) => {
    if (!email) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }

    const md5 = createHash('md5').update(email).digest('hex');

    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};