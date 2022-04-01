var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductsSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    stock: {type: Number, required: true},
    categories: String,
    user : {type: String, required: true}, 
    inUserCart: [],
    inUserHistory: [],
    // Add user emails array
});

module.exports = mongoose.model('Products', ProductsSchema);