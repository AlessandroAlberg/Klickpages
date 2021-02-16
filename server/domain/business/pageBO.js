'use strict';
const PageRepository = require('../repository/pageRepository');
const PageResponse = require('../../responses/pageResponse');

module.exports = class PageBO {
    constructor() {
        this._repository = new PageRepository();
    }

    async pagesGet() {
        let result = await  this._repository.findAll();
        let pages = result.map(item => {return PageResponse.to(item)});
        return pages;
    }

    async pageGet(param) {
        let result = await  this._repository.find(param);
        let page = result.map(item => {return PageResponse.to(item)});
        return page;
    }

    async pagePost(params) {
        let id = await  this._repository.postPage(params);
        return id;
    }

    async pagePut(params) {
        let result = await  this._repository.pagePut(params);
        return 'Page atualizada!';
    }

}