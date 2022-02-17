var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductsSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {data: Buffer, content: String},
    stock: {String, required: true},
    categories: String,
});

module.exports = mongoose.model('Products', ProductsSchema);