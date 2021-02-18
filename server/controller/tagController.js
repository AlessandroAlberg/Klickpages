'use strict';
const TagService = require('../service/tagService');

module.exports.getTags = function (req, res) {
    const service = new TagService();
    service.getTags(req, res);
}

module.exports.getTag = function (req, res) {
    const service = new TagService();
    service.getTag(req, res);
}

module.exports.postTag = function (req, res) {
    const service = new TagService();
    service.postTag(req, res);
}

module.exports.putTag = function (req, res) {
    const service = new TagService();
    service.putTag(req, res);
}

module.exports.deleteTag = function (req, res) {
    const service = new TagService();
    service.deleteTag(req, res);
}