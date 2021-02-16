'use strict';

module.exports = class TagResponse {
    static to(obj) {
        return {
            id: (typeof obj.Id !== 'undefined') ? obj.Id : null,
            pageId: (typeof obj.PageId !== 'undefined') ? obj.PageId : null,
            name: (typeof obj.Name !== 'undefined') ? obj.Name : null
            
        }
    }
}