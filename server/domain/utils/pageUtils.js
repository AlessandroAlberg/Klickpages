'use strict';

const SettingRepository = require('../repository/settingRepository');
const TagRepository = require('../repository/tagRepository');

module.exports = class PageUtils {
    constructor () {
        this._repositoryTag = new TagRepository();
        this._repositorySetting = new SettingRepository();
    }
    async filteredArray(array) {
        let filtered = array.filter(function (elements) {
            return elements !== null && elements !== 'Página não encontrada';
        });
        return filtered;
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