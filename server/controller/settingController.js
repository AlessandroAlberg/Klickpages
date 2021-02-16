'use strict';
const SettingService = require('../service/settingService');

module.exports.getSetting = function (req, res) {
    const service = new SettingService();
    service.getSetting(req, res);
}

module.exports.postSetting = function (req, res) {
    const service = new SettingService();
    service.postSetting(req, res);
}

module.exports.putSetting = function (req, res) {
    const service = new SettingService();
    service.putSetting(req, res);
}

module.exports.deleteSetting = function (req, res) {
    const service = new SettingService();
    service.deleteSetting(req, res);
}