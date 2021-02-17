'use strict';
const PageRepository = require('../repository/pageRepository');
const PageResponse = require('../../responses/pageResponse');
const TagRepository = require('../repository/tagRepository');
const TagResponse = require('../../responses/tagResponse');
const SettingRepository = require('../repository/settingRepository');

module.exports = class PageBO {
    constructor() {
        this._repository = new PageRepository();
        this._repositoryTag = new TagRepository();
        this._repositorySetting = new SettingRepository();
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

    async pageDelete(param) {
        this.settingDelete(param);
        this.tagsDelete(param);
        let result = await  this._repository.pageDelete(param);
        if (result.rowsAffected[0]) {
            return 'Page deletada';
        } else {
            throw new Error('Falha ao tentar deletar a Page');
        }
    }

    async settingDelete(param) {
        let idSetting = await this._repositorySetting.existsSettingId(param);
        await this._repositorySetting.settingDelete(idSetting[0]);
    }

    async tagsDelete(param) {
        let tags = await this._repositoryTag.findAll(param);
        let arrayTags = [];
        if (tags.length !== 0) {
            for (let item of tags) {
                arrayTags.push(await TagResponse.to(item));
            }
        }
        for (let item of arrayTags){
            await this._repositoryTag.tagDelete(item.id);
        }
    }
}