const assert = require('assert');
const mocha = require('mocha');
const expect = require('chai').expect;
const request = require('supertest');
const path = require('path');

const app = require(path.join('..', 'app'));

describe('Unit tests for /', function() {
    it('should return OK status', async function() {
        const res = await request(app)
            .get('/');
        assert.equal(res.status, 200);
    });

    it('should greet the world', async function() {
        const res = await request(app)
            .get('/');
        expect(res.text).to.contain('Hello World');
    });
});
