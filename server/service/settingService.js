'use strict';
const SettingBO = require('../domain/business/settingBO');

module.exports = class SettingService {
    constructor() {
        this._bo = new SettingBO();
    }

    async getSetting(req, res) {
        try{
            const param = req.params.id;
            let result = await this._bo.settingGet(param);
            return res.status(200).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }

    async postSetting(req, res) {
        try{
            const params = {
                pageId: req.body.pageId,
                title: req.body.title,
                description: req.body.description,
                language: req.body.language
            }
            let result = await this._bo.settingPost(params);
            return res.status(201).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }

    async putSetting(req, res) {
        try{
            const params = {
                id: req.body.id,
                title: req.body.title,
                description: req.body.description,
                language: req.body.language
            }
            let result = await this._bo.settingPut(params);
            return res.status(200).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }

    async deleteSetting(req, res) {
        try{
            const param = req.params.id;
            let result = await this._bo.settingDelete(param);
            return res.status(200).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }
}