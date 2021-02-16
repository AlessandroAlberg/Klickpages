'use strict';
const PageBO = require('../domain/business/pageBO');
const { param } = require('../routes/pageRoutes');

module.exports = class PageService {
    constructor() {
        this._bo = new PageBO();
    }

    async getPages(req, res) {
        try{
            let result = await this._bo.pagesGet();
            return res.status(200).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }

    async getPage(req, res) {
        try{
            const param = req.params.id;
            let result = await this._bo.pageGet(param);
            return res.status(200).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }

    async postPage(req, res) {
        try{
            const params = {
                name: req.body.name,
                url: req.body.url,
                published: req.body.published,
            }
            let result = await this._bo.pagePost(params);
            return res.status(201).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }

    async putPage(req, res) {
        try{
            let id = req.params.id;
            const params = {
                id: id,
                name: req.body.name,
                url: req.body.url,
                published: req.body.published,
            }
            let result = await this._bo.pagePut(params);
            return res.status(200).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }
}