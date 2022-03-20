const session = require('supertest-session');

var testSession = session('http://localhost:9000')

describe('When registering a new user', function() {
    describe('Where the email is not already in use', function() {
        it('The registration should be successful', function(done) {
            testSession
                .post('/users/register')
                .send({email: 'johndoe@test.com', name: 'John Doe', password: 'password', userType: 'Customer'})
                .expect(201, done);
        });
    });

    describe('Where the email is already in use', function() {
        it('The registration should be rejected', function(done) {
            testSession
                .post('/users/register')
                .send({email: 'johndoe@test.com', name: 'John Doe', password: 'password', userType: 'Customer'})
                .expect(400, done);
        });
    });
});

describe('When logging in an existing user', function() {
    describe('With invalid credentials', function() {
        it('The login should be rejected', function(done) {
            testSession
                .post('/users/login')
                .send({email: 'johndoe@test.com', password: 'drowssap'})
                .expect(401, done);
        });
    });

    describe('With valid credentials', function() {
        it('The login should be successful', function(done) {
            testSession
                .post('/users/login')
                .send({email: 'johndoe@test.com', password: 'password'})
                .expect(200, done);
        });
    });
});