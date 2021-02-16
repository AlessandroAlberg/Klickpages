'use strict';
const PageService = require('../service/pageService');

module.exports.getPages = function (req, res) {
    const service = new PageService();
    service.getPages(req, res);
}

module.exports.getPage = function (req, res) {
    const service = new PageService();
    service.getPage(req, res);
}

module.exports.postPage = function (req, res) {
    const service = new PageService();
    service.postPage(req, res);
}

module.exports.putPage = function (req, res) {
    const service = new PageService();
    service.putPage(req, res);
}