'use strict';
const common = require('./commonControllerTest');
let id = 1;
let pageId = 3;

describe('/GET all/:pageId', () => {
    it ('It should GET several tag', async () => {
        const res = await common.chai.request(common.server)
        .get(`/tag/all/${pageId}`);
        res.should.have.status(200);
    });
});

describe('/GET tag/:id', () => {
    it ('It should GET one tag', async () => {
        const res = await common.chai.request(common.server)
        .get(`/tag/${id}`);
        res.should.have.status(200);
    });
});

describe.skip('/POST tag/', () => {
    it('It should returns 201 - Create the tag data in the table', async () => {
        let tag = {
            pageId: 1,
            name: "test"
        }
        const res = await common.chai.request(common.server)
            .post(`/tag`)
            .send(tag);
        res.should.have.status(201);
    });
});

describe('/PUT tag/', () => {
    it ('It should returns 200 - Updates tag data', async () => {
        let tag = { 
            id: 6,
            name: "test name"
        }
        const res = await common.chai.request(common.server)        
            .put(`/tag`)
            .send(tag);
        res.should.have.status(200);
    });
});

describe.skip('/DELETE tag/', () => {
    it('It should returns 200 - Delete tag', async () => {
        let tagId = 7;
        const res = await common.chai.request(common.server)
            .delete(`/tag/${tagId}`)
        res.should.have.status(200);
    });
});
