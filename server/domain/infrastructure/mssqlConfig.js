'use strict';
const config = require('config');

module.exports = {
    server: config.get('DB').MSSQL.HOST,
    port: config.get('DB').MSSQL.PORT,
    user: config.get('DB').MSSQL.USER,
    password: config.get('DB').MSSQL.PASSWORD,
    database: config.get('DB').MSSQL.DB, 
    requestTimeout : config.get('DB').MSSQL.REQUEST_TIMEOUT, 
    connectionTimeout: config.get('DB').MSSQL.CONNECTION_TIMEOUT,
    pool: {
        max: config.get('DB').MSSQL.POOL.MAX,
        min: config.get('DB').MSSQL.POOL.MIN
    },       
    options: {
        encrypt: false,
        enableArithAbort: false
    }
}