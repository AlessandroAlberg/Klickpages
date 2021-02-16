'use strict';
const PageService = require('../service/pageService');

module.exports.getPage = function (req, res) {
    const service = new PageService();
    service.getPage(req, res);
}