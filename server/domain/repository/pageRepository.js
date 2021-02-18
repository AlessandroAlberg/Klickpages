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
            let query = `SELECT Id
                         FROM Page`;
            let result = await conn.request()
            .query(query);
            
            return result.recordset;
        } catch (err) {
            throw new Error(err);
        }

    }

    async find(param) {
        let conn =  await this._mssqlPool;
        try {
            let query = `SELECT  Page.Id Id,
                                 Page.Name Name,
                                 Page.Url Url,
                                 Page.Published Published,
                                 Setting.Title Title,
                                 Setting.Id SettingId,
                                 Setting.Description Description,
                                 Setting.Language Language
                         FROM Page
                         LEFT JOIN Setting ON Page.Id = Setting.PageId
                         WHERE Page.Id = @Id`;
            let result = await conn.request()
                .input('Id', this._mssql.Int, param)
                .query(query);
            
            return result.recordset;
        } catch (err) {
            throw new Error(err);
        }

    }

    async postPage(params) {
        let conn =  await this._mssqlPool;
        try {
            let query = `INSERT INTO Page
                            (
                                Name,
                                Url,
                                Published
                            ) VALUES (
                                @Name,
                                @Url,
                                @Published
                            )SELECT @@IDENTITY Id`;
            let result = await conn.request()
                .input('Name', this._mssql.VarChar(255), params.name)
                .input('Url', this._mssql.VarChar(255), params.url)
                .input('Published', this._mssql.Bit, params.published)
                .query(query);
            
            return result.recordset;
        } catch (err) {
            throw new Error(err);
        }

    }

    async pagePut(params) {
        let conn =  await this._mssqlPool;
        try {
            let query = `UPDATE Page
                         SET Name = @Name,
                             Url = @Url,
                             Published = @Published
                         WHERE Id = @Id`;
            let result = await conn.request()
                .input('Id', this._mssql.Int, params.id)
                .input('Name', this._mssql.VarChar(255), params.name)
                .input('Url', this._mssql.VarChar(255), params.url)
                .input('Published', this._mssql.Bit, params.published)
                .query(query);
            
            return result;
        } catch (err) {
            throw new Error(err);
        }

    }

    async pageDelete(param) {
        let conn =  await this._mssqlPool;
        try {
            let query = `DELETE
                         FROM Page
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