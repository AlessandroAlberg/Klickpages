'use strict';
const mssql = require('mssql');
const mssqlFactory = require('../infrastructure/mssql');

module.exports = class TagRepository {
    constructor() {
        this._mssql = mssql;
        this._mssqlPool = mssqlFactory;
    }

    async findAll(param) {
        let conn =  await this._mssqlPool;
        try {
            let query = `SELECT *
                         FROM Tag
                         WHERE PageId = @PageId`;
            let result = await conn.request()
            .input('PageId', this._mssql.Int, param)
            .query(query);
            
            return result.recordset;
        } catch (err) {
            throw new Error(err);
        }

    }

    async find(param) {
        let conn =  await this._mssqlPool;
        try {
            let query = `SELECT *
                         FROM Tag
                         WHERE Id = @Id`;
            let result = await conn.request()
                .input('Id', this._mssql.Int, param)
                .query(query);
            
            return result.recordset;
        } catch (err) {
            throw new Error(err);
        }

    }

    async postTag(params) {
        let conn =  await this._mssqlPool;
        try {
            let query = `INSERT INTO Tag
                            (
                                PageId,
                                Name
                            ) VALUES (
                                @PageId,
                                @Name
                            )SELECT @@IDENTITY Id`;
            let result = await conn.request()
                .input('PageId', this._mssql.VarChar(255), params.pageId)
                .input('Name', this._mssql.VarChar(255), params.name)
                .query(query);
            
            return result.recordset;
        } catch (err) {
            throw new Error(err);
        }

    }

    async tagPut(params) {
        let conn =  await this._mssqlPool;
        try {
            let query = `UPDATE Tag
                         SET Name = @Name
                         WHERE Id = @Id`;
            let result = await conn.request()
                .input('Id', this._mssql.Int, params.id)
                .input('Name', this._mssql.VarChar(255), params.name)
                .query(query);
            
            return result;
        } catch (err) {
            throw new Error(err);
        }
    }

    async tagDelete(param) {
        let conn =  await this._mssqlPool;
        try {
            let query = `DELETE
                         FROM Tag
                         WHERE Id = @Id`;
            let result = await conn.request()
                .input('Id', this._mssql.Int, param)
                .query(query);            
            return result;
        } catch (err) {
            throw new Error(err);
        }

    }
}