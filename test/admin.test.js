const session = require('supertest-session');
const { expect } = require('chai');

var testSession = session('http://localhost:9000');

before(function(done) {
    testSession
        .post('/users/register')
        .send({email: 'regularuser@test.com', name: 'Regular User', password: 'password', userType: 'Customer'})
        .expect(201)
        .end(function (err, res) {
            testSession
                .post('/users/register')
                .send({email: 'admin@test.com', name: 'Admin Istrator', password: 'password', userType: 'Admin'})
                .expect(201, done);
        });
});

describe('When logged in as an administrator', function() {
    before(function(done) {
        testSession
            .post('/users/login')
            .send({email: 'admin@test.com', password: 'password'})
            .expect(200, done);
    });

    it('A user\'s account can be modified', function(done) {
        // Get all the users
        testSession
            .get('/admin/search')
            .end(function (err, res) {
                // Find the customer we created
                const user = res.body.filter(u => u.name == 'Regular User')[0];
                // Update their name
                testSession
                    .post('/admin/update/' + user._id)
                    .send({email: user.email, name: 'User Regular', userType: user.userType})
                    .end(function (err2, res2) {
                        // Get all the users again and check for the new name
                        testSession
                            .get('/admin/search')
                            .end(function (err3, res3) {
                                const updatedUser = res3.body.filter(u => u._id == user._id)[0];
                                expect(updatedUser.name).to.be.equal('User Regular');
                                return done();
                            })
                    });
            });
    });

    it('A user\'s account can be deleted', function(done) {
        // Get all the users
        testSession
            .get('/admin/search')
            .end(function (err, res) {
                // Find the customer we created/updated
                const user = res.body.filter(u => u.name == 'User Regular')[0];
                // Ban them
                testSession
                    .delete('/admin/ban/' + user._id)
                    .end(function (err2, res2) {
                        // Get all the users again and expect not to find that user
                        testSession
                            .get('/admin/search')
                            .end(function (err3, res3) {
                                expect(res3.body.filter(u => u._id == user._id)).to.be.empty;
                                return done();
                            });
                    });
            });
    });
});