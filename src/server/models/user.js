const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
    {
        email: {type: String, required: true},
        name: {type: String, required: true},
        hashedPassword: {type: String, required: true},
        salt: {type: String, required: true},
        userType: {type: String, enum: ['customer', 'seller', 'admin'], required: true},
        address: String,
        creditCard: String
    }
);

module.exports = mongoose.model('User', UserSchema);