const mongoose = require('mongoose');

exports.mochaHooks = {
    beforeAll() {
        mongoose.connect('mongodb://localhost:27017/taiga-test');
        mongoose.connection.dropDatabase();
        mongoose.disconnect();
        console.log('Dropped database in pretest hook');
    }
};