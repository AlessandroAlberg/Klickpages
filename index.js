const app = require('./server/config/express');
const config = require('config');

app.listen(config.get('SERVER').PORT, () => {
  console.log(
    `API subiu no endereço http://${config.get('SERVER').HOST}:${config.get('SERVER').PORT} (${config.get('ENV')})`
  );
});

module.exports = app;