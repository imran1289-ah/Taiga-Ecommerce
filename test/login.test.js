const request = require('supertest');
const { expect } = require('chai');

describe('When registering a new user', function() {
    describe('Where the email is not already in use', function() {
        it('The registration should be successful', function() {
            request('http://localhost:9000')
                .get('/')
                .expect(200, 'Hello world from server!');
        });
    });
});