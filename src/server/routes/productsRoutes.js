const express = require('express');
const router = express.Router();
const ProductModel = require('../models/products');

//Adds new product into the database
router.route('/create').post((req,res) => {
    ProductModel.save()
        .then(product => {
            name: req.body.name
            description: req.body.description
            price: req.body.price
            image: req.body.image
            stock: req.body.stock
            categories: req.body.categories
            user: req.body.user
            console.log("Product was added into the database");
        })
        .catch(error => console.log("Error"))
})

//Edit product into the database
router.route('/update/:id').post((req,res) => {
    ProductModel.findByIdAndUpdate(req.params.id)
        .then(product => {
            name: req.body.name
            description: req.body.description
            price: req.body.price
            image: req.body.image
            stock: req.body.stock
            categories: req.body.categories
            user: req.body.user

            product.save()
                .then(() => console.log("Product was updated in the database"))
                .catch(error => console.log("Error"));
            
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