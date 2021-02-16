'use strict';

module.exports = class SettingResponse {
    static to(obj) {
        return {
            id: (typeof obj.Id !== 'undefined') ? obj.Id : null,
            pageId: (typeof obj.PageId !== 'undefined') ? obj.PageId : null,
            title: (typeof obj.Title !== 'undefined') ? obj.Title : null,
            description: (typeof obj.Description !== 'undefined') ? obj.Description : null,
            linguage: (typeof obj.Linguage !== 'undefined') ? obj.Linguage : null
        }
    }
}