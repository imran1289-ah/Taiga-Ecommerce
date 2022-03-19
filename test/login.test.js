const request = require('supertest');
const { expect } = require('chai');

// Test order
require('./pretest');

describe('When registering a new user', function() {
    describe('Where the email is not already in use', function() {
        it('The registration should be successful', function() {
            request('http://localhost:9000')
                .post('/users/register')
                .send({email: 'johndoe@test.com', name: 'John Doe', password: 'password', userType: 'Customer'})
                .expect(201);
        });
    });

    describe('Where the email is already in use', function() {
        it('The registration should be rejected', function() {
            request('http://localhost:9000')
                .post('/users/register')
                .send({email: 'johndoe@test.com', name: 'John Doe', password: 'password', userType: 'Customer'})
                .expect(400);
        });
    });
});

describe('When logging in an existing user', function() {
    describe('With invalid credentials', function() {
        it('The login should be rejected', function() {
            request('http://localhost:9000')
                .post('/users/login')
                .send({email: 'johndoe@test.com', password: 'drowssap'})
                .expect(401);
        });
    });

    describe('With valid credentials', function() {
        it('The login should be successful', function() {
            request.agent('http://localhost:9000')
                .post('/users/login')
                .send({email: 'johndoe@test.com', password: 'password'})
                .expect(200)
                .expect('Set-Cookie');
        });
    });
});