'use strict';
const PageBO = require('../domain/business/pageBO');

module.exports = class PageService {
    constructor() {
        this._bo = new PageBO();
    }

    async getPage(req, res) {
        try{
            let result = await this._bo.pageGet();
            return res.status(200).send(result);
        } catch (err) {
            throw new Error(err);
        }
    }
}