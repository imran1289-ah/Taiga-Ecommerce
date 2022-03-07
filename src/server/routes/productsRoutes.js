const express = require('express');
const router = express.Router();
const ProductModel = require('../models/products');

//Adds new product into the database
router.route('/create').post((req,res) => {
    productName = req.body.name;
    productDescription = req.body.description;
    productPrice = req.body.price;
    productImage = req.body.image;
    productStock = req.body.stock;
    productCategories = req.body.categories;
    productUser = req.body.user;

    NewProduct = new ProductModel({productName, productDescription, productPrice, productImage, productStock, productCategories, productUser});

    NewProduct.save()
        .then(() => console.log("Product was sucessful added"))
        .catch(error => console.log(error));
});

//Edit product into the database
router.route('/update/:id').post((req,res) => {
    ProductModel.findByIdAndUpdate(req.params.id)
        .then(product => {
            product.name = req.body.name
            product.description = req.body.description
            product.price = req.body.price
            product.image =  req.body.image
            product.stock = req.body.stock
            product.categories =  req.body.categories
            product.user =  req.body.user

            product.save()
                .then(() => console.log("Product was updated in the database"))
                .catch(error => console.log(error));
            
        } )
        .catch(error => res.json("Error finding product"))
});

//Delete product from the database
router.route('/delete/:id').delete((req,res) => {
    ProductModel.findByIdAndDelete(req.params.id)
        .then(() => console.log("Product Deleted in the database"))
        .catch(error => console.log("Error"));
})

module.exports = router;