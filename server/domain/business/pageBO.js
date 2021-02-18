'use strict';
const PageRepository = require('../repository/pageRepository');
const PageResponse = require('../../responses/pageResponse');
const TagResponse = require('../../responses/tagResponse');
const TagRepository = require('../repository/tagRepository');
const PageUtils = require('../utils/pageUtils');

module.exports = class PageBO {
    constructor() {
        this._repository = new PageRepository();
        this._repositoryTag = new TagRepository();
        this._repositoryPageUtils = new PageUtils();
    }

    async pagesGet() {
        let result = await  this._repository.findAll();
        let page = [];
        let results = [];
        let pages = result.map(item => { return page.push(item) });
        for (let item of pages) {
            results.push(await this.pageGet(item));
        }
        results = await this._repositoryPageUtils.filteredArray(results);
        return results;
    }

    async pageGet(param) {
        let result = await  this._repository.find(param);
        let page = result.map(item => {return PageResponse.to(item)});
        let tags = await this._repositoryTag.findAll(param);
        if (page.length == 0){
            return 'Página não encontrada';
        }
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

    async pageDelete(param) {
        this._repositoryPageUtils.settingDelete(param);
        this._repositoryPageUtils.tagsDelete(param);
        let result = await  this._repository.pageDelete(param);
        if (result.rowsAffected[0]) {
            return 'Página deletada';
        } else {
            throw new Error('Falha ao tentar deletar a Page');
        }
    }

}