'use strict';
const PageRepository = require('../repository/pageRepository');
const PageResponse = require('../../responses/pageResponse');
const TagRepository = require('../repository/tagRepository');
const TagResponse = require('../../responses/tagResponse');

module.exports = class PageBO {
    constructor() {
        this._repository = new PageRepository();
        this._repositoryTag = new TagRepository();
    }

    async pagesGet() {
        let result = await  this._repository.findAll();
        let page = [];
        let results = [];
        let pages = result.map(item => { return page.push(item) });
        for (let item of pages) {
            results.push(await this.pageGet(item));
        }
        return results;
    }

    async pageGet(param) {
        let result = await  this._repository.find(param);
        let page = result.map(item => {return PageResponse.to(item)});
        let tags = await this._repositoryTag.findAll(param);
        if (tags.length !== 0) {
            page[0].tags = [];
            for (let item of tags) {
                page[0].tags.push(await TagResponse.to(item));
            }
        }
        page = page[0];
        return page;
    }

    async pagePost(params) {
        let id = await  this._repository.postPage(params);
        return id;
    }

    async pagePut(params) {
        let result = await  this._repository.pagePut(params);
        if (result.rowsAffected[0]) {
            return 'Página atualizada';
        } else {
            throw new Error('A Página não foi atualizada');
        }
    }

}