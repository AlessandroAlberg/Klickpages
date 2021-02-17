'use strict';
const common = require('./commonControllerTest');
let id = 1;

describe('/GET page', () => {
    it ('It should GET several page', async () => {
        const res = await common.chai.request(common.server)
        .get(`/page`);
        res.should.have.status(200);
    });
});

describe('/GET page/:id', () => {
    it ('It should GET one page', async () => {
        const res = await common.chai.request(common.server)
        .get(`/page/${id}`);
        res.should.have.status(200);
    });
});

describe.skip('/POST page/', () => {
    it('It should returns 201 - Create the page data in the table', async () => {
        let page = {
            name: "test",
            url: "test.com.br",
            published: true
        }
        const res = await common.chai.request(common.server)
            .post(`/page`)
            .send(page);
        res.should.have.status(201);
    });
});

describe.skip('/PUT page/', () => {
    it ('It should returns 200 - Updates page data', async () => {
        let page = { 
            id: 26,
            name: "test",
            url: "test.com",
            published: false
        }
        const res = await common.chai.request(common.server)        
            .put(`/page`)
            .send(page);
        res.should.have.status(200);
    });
});

describe.skip('/DELETE page/', () => {
    it('It should returns 200 - Delete page', async () => {
        let id = 24;
        const res = await common.chai.request(common.server)
            .delete(`/page/${id}`)
        res.should.have.status(200);
    });
});
