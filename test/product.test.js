const session = require('supertest-session');

var testSession = session('http://localhost:9000')

before(function(done) {
    testSession
        .post('/users/register')
        .send({email: 'johnqseller@test.com', name: 'John Q Seller', password: 'password', userType: 'Seller'})
        .expect(201, done);
});

describe('When logged in as a seller', function () {
    before(function(done) {  
        testSession
            .post('/users/login')
            .send({email: 'johnqseller@test.com', password: 'password'})
            .expect(200, done);
    })
    
    it('A new product can be created', function(done) {
        testSession
            .post('/products/create')
            .send({
                // https://www.bkstr.com/concordiastore/product/clothing-accessories/men/t-shirts-tanks-men/sst-1c-wdmk-maroo-sm---527857-1
                name: 'Concordia University Short Sleeve T-Shirt',
                description: 'Shirt',
                price: 16.95,
                image: 'https://bkstr.scene7.com/is/image/Bkstr/2959-R64ST-WDMK-D-Maroon?$HomePageRecs_ET$&fmt=png',
                stock: 20,
                categories: 'Clothes',
                user: 'johnqseller@test.com'
            })
            .expect(200, done);
    });

    it('The created product can be updated', function(done) {
        testSession
            .get('/products/search')
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                    return done(err);
                }

                var id = res.body[0]._id;
                testSession
                    .post('/products/update/' + id)
                    .send({
                        name: 'Concordia University Short Sleeve T-Shirt',
                        description: 'A maroon-coloured short-sleeved T-shirt with the Concordia University logo on it.',
                        price: 15.00,
                        image: 'https://bkstr.scene7.com/is/image/Bkstr/2959-R64ST-WDMK-D-Maroon?$HomePageRecs_ET$&fmt=png',
                        stock: 10,
                        categories: 'Clothes',
                        user: 'johnqseller@test.com'
                    })
                    .expect(200, done);
            });
    });

    it('The created product can be deleted', function(done) {
        testSession
            .get('/products/search')
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                    return done(err);
                }

                var id = res.body[0]._id;
                testSession
                    .delete('/products/delete/' + id)
                    .expect(200, done);
            });
    });
});