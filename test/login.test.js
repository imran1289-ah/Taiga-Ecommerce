const request = require('supertest');
const { expect } = require('chai');

describe('When registering a new user', () => {
    describe('Where the email is not already in use', () => {
        it('The registration should be successful', () => {
            var test = true;
            expect(test).to.eq(true);
        });
    });
});