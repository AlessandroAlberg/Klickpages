'use strict';
const TagRepository = require('../repository/tagRepository');
const TagResponse = require('../../responses/tagResponse');

module.exports = class TagBO {
    constructor() {
        this._repository = new TagRepository();
    }

    async tagsGet(param) {
        let result = await  this._repository.findAll(param);
        let tags = result.map(item => {return TagResponse.to(item)});
        return tags;
    }

    async tagGet(param) {
        let result = await  this._repository.find(param);
        let tag = result.map(item => {return TagResponse.to(item)});
        return tag;
    }

    async tagPost(params) {
        let id = await  this._repository.postTag(params);
        return id;
    }

    async tagPut(params) {
        let result = await  this._repository.tagPut(params);
        if (result.rowsAffected[0]) {
            return 'Tag atualizada';
        } else {
            throw new Error('A Tag não foi atualizada');
        }
    }

    async tagDelete(param) {
        let result = await  this._repository.tagDelete(param);
        if (result.rowsAffected[0]) {
            return 'Tag deletada';
        } else {
            throw new Error('Falha ao tentar deletar a Tag');
        }
    }

}