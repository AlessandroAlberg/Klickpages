'use strict';
const PageRepository = require('../repository/pageRepository');
const PageResponse = require('../../responses/pageResponse');

module.exports = class PageBO {
    constructor() {
        this._repository = new PageRepository();
    }

    async pageGet() {
        let result = await  this._repository.findAll();
        let pages = result.map(item => {return PageResponse.to(item)});
        return pages;
    }
}