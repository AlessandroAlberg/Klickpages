'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('config');
const http = require('http');
const logger = require('tracer').colorConsole();
const middlewares = require('../../../config/express.js');
const server = http.createServer(middlewares);
process.setMaxListeners(0);

server.listen(8000, async () => {
    logger.info(`
        ip-address: ${config.get('TEST').HOST}:${config.get('TEST').PORT}
        enviroment: ${config.get('ENV')}
    `);
});

chai.should();
chai.use(chaiHttp);   

module.exports = {
    chai,
    config,
    server
}