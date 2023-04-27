module.exports = (app) => {
    const config = require('./index');
    app.set('secret-key', config.secret_key);
};
