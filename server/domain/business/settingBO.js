'use strict';
const SettingRepository = require('../repository/settingRepository');
const SettingResponse = require('../../responses/settingResponse');

module.exports = class SettingBO {
    constructor() {
        this._repository = new SettingRepository();
    }

    async settingGet(param) {
        let result = await  this._repository.find(param);
        let setting = result.map(item => {return SettingResponse.to(item)});
        return setting;
    }

    async settingPost(params) {
        let pages = await this._repository.existsSetting(params.pageId);
        if (pages[0]){
            throw new Error('Já existe uma configuração para essa página');
        }
        let id = await  this._repository.postSetting(params);
        return id;
    }

    async settingPut(params) {
        let result = await  this._repository.settingPut(params);
        if (result.rowsAffected[0]) {
            return 'Configuração atualizada';
        } else {
            throw new Error('A configuração não foi atualizada!');
        }
    }

    async settingDelete(param) {
        let result = await  this._repository.settingDelete(param);
        if (result.rowsAffected[0]) {
            return 'Configuração deletada';
        } else {
            throw new Error('Falha ao tentar deletar a configuração');
        }
    }

}