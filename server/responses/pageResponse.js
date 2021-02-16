'use strict';

module.exports = class PageResponse {
    static to(obj) {
        return {
            id: (typeof obj.Id !== 'undefined') ? obj.Id : null,
            name: (typeof obj.Name !== 'undefined') ? obj.Name : null,
            url: (typeof obj.Url !== 'undefined') ? obj.Url : null,
            published: (typeof obj.Published !== 'undefined') ? obj.Published : null,
        }
    }
}