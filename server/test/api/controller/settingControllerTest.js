'use strict';
const common = require('./commonControllerTest');
let id = 1;

describe('/GET setting/:id', () => {
    it ('It should GET one setting', async () => {
        const res = await common.chai.request(common.server)
        .get(`/setting/${id}`);
        res.should.have.status(200);
    });
});

describe.skip('/POST setting/', () => {
    it('It should returns 201 - Create the setting data in the table', async () => {
        let setting = {
            pageId: 8,
            title: "test",
            description: "test description",
            language: "python"
        }
        const res = await common.chai.request(common.server)
            .post(`/setting`)
            .send(setting);
        res.should.have.status(201);
    });
});

describe('/PUT setting/', () => {
    it ('It should returns 200 - Updates setting data', async () => {
        let setting = { 
            id: 6,
            title: "test title",
            description: "test description",
            language: "c++"
        }
        const res = await common.chai.request(common.server)        
            .put(`/setting`)
            .send(setting);
        res.should.have.status(200);
    });
});

describe.skip('/DELETE setting/', () => {
    it('It should returns 200 - Delete configuration', async () => {
        let id = 8;
        const res = await common.chai.request(common.server)
            .delete(`/setting/${id}`)
        res.should.have.status(200);
    });
});
