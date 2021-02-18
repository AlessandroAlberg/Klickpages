'use strict';
const mssql = require('mssql');
const mssqlConfig = require('./mssqlConfig');

const pool = new mssql.ConnectionPool(mssqlConfig).connect();

module.exports = pool;