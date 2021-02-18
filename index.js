const app = require('./server/config/express');
const config = require('config');

app.listen(config.get('SERVER').PORT);

module.exports = app;