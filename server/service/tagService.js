'use strict';
const TagBO = require('../domain/business/tagBO');

module.exports = class TagService {
    constructor() {
        this._bo = new TagBO();
    }

    async getTags(req, res) {
        try{
            const param = req.params.pageId;
            let result = await this._bo.tagsGet(param);
            return res.status(200).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }

    async getTag(req, res) {
        try{
            const param = req.params.id;
            let result = await this._bo.tagGet(param);
            return res.status(200).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }

    async postTag(req, res) {
        try{
            const params = {
                pageId: req.body.pageId,
                name: req.body.name
            }
            let result = await this._bo.tagPost(params);
            return res.status(201).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }

    async putTag(req, res) {
        try{
            const params = {
                id: req.body.id,
                name: req.body.name
            }
            let result = await this._bo.tagPut(params);
            return res.status(200).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }

    async deleteTag(req, res) {
        try{
            const param = req.params.id;
            let result = await this._bo.tagDelete(param);
            return res.status(200).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }
}