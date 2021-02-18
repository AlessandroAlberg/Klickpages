'use strict';
const mssql = require('mssql');
const mssqlFactory = require('../infrastructure/mssql');

module.exports = class SettingRepository {
    constructor() {
        this._mssql = mssql;
        this._mssqlPool = mssqlFactory;
    }

    async find(param) {
        let conn =  await this._mssqlPool;
        try {
            let query = `SELECT *
                         FROM Setting
                         WHERE Id = @Id`;
            let result = await conn.request()
                .input('Id', this._mssql.Int, param)
                .query(query);
            
            return result.recordset;
        } catch (err) {
            throw new Error(err);
        }

    }

    async existsSetting(param) {
        let conn =  await this._mssqlPool;
        try {
            let query = `SELECT *
                         FROM Setting
                         WHERE pageId = @pageId`;
            let result = await conn.request()
                .input('pageId', this._mssql.Int, param)
                .query(query);
            
            return result.recordset;
        } catch (err) {
            throw new Error(err);
        }
    }

    async existsSettingId(param) {
        let conn =  await this._mssqlPool;
        try {
            let query = `SELECT Id
                         FROM Setting
                         WHERE pageId = @pageId`;
            let result = await conn.request()
                .input('pageId', this._mssql.Int, param)
                .query(query);
            
            return result.recordset;
        } catch (err) {
            throw new Error(err);
        }
    }

    async postSetting(params) {
        let conn =  await this._mssqlPool;
        try {
            let query = `INSERT INTO Setting
                            (
                                PageId,
                                Title,
                                Description,
                                Language
                            ) VALUES (
                                @PageId,
                                @Title,
                                @Description,
                                @Language
                            )SELECT @@IDENTITY Id`;
            let result = await conn.request()
                .input('PageId', this._mssql.Int, params.pageId)
                .input('Title', this._mssql.VarChar(255), params.title)
                .input('Description', this._mssql.Text, params.description)
                .input('Language', this._mssql.VarChar(255), params.language)
                .query(query);
            
            return result.recordset;
        } catch (err) {
            throw new Error(err);
        }
    }

    async settingPut(params) {
        let conn =  await this._mssqlPool;
        try {
            let query = `UPDATE Setting
                         SET
                             Title = @Title,
                             Description = @Description,
                             Language = @Language
                         WHERE Id = @Id`;
            let result = await conn.request()
                .input('Id', this._mssql.Int, params.id)
                .input('Title', this._mssql.VarChar(255), params.title)
                .input('Description', this._mssql.Text, params.description)
                .input('Language', this._mssql.VarChar(255), params.language)
                .query(query);
            
            return result;
        } catch (err) {
            throw new Error(err);
        }

    }

    async settingDelete(param) {
        let conn =  await this._mssqlPool;
        try {
            let query = `DELETE
                         FROM Setting
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