'use strict';

module.exports = class PageResponse {
    static to(obj) {
        return {
            id: (typeof obj.Id !== 'undefined') ? obj.Id : null,
            name: (typeof obj.Name !== 'undefined') ? obj.Name : null,
            url: (typeof obj.Url !== 'undefined') ? obj.Url : null,
            published: (typeof obj.Published !== 'undefined') ? obj.Published : null,
            settings: (typeof obj.SettingId !== 'undefined' && obj.SettingId !==  null) ? {
                settingId: (typeof obj.SettingId !== 'undefined') ? obj.SettingId : null,
                title: (typeof obj.Title !== 'undefined') ? obj.Title : null,
                description: (typeof obj.Description !== 'undefined') ? obj.Description : null,
                language: (typeof obj.Language !== 'undefined') ? obj.Language : null
            } : null
        }
    }
}