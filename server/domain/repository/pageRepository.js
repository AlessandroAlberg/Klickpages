'use strict';
const mssql = require('mssql');
const mssqlFactory = require('../infrastructure/mssql');

module.exports = class PageRepository {
    constructor() {
        this._mssql = mssql;
        this._mssqlPool = mssqlFactory;
    }

    async findAll() {
        let conn =  await this._mssqlPool;
        try {
            let query = `SELECT *
                         FROM Page`;
            let result = await conn.request().query(query);
            return result.recordset;
        } catch (err) {
            throw new Error(err);
        }

    }
}