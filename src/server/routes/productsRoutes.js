const express = require('express');
const router = express.Router();
const ProductModel = require('../models/products');

router.route('/create').post((req,res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const stock = req.body.stock;
    const categories = req.body.categories;
    const user = req.body.user;

    const AddedProduct = new ProductModel({name, description, price, image, stock, categories, user});

    AddedProduct.save()
        .then(() => res.json("Product was sucessful added"))
        .catch(error => res.json("Error"));
});

router.route('/update/:id').post((req,res) => {
    ProductModel.findByIdAndUpdate(req.params.id)
        .then(product => {
            product.name = req.body.name
            product.description = req.body.description
            product.price = req.body.price
            product.image = req.body.image
            product.stock = req.body.stock
            product.categories = req.body.categories
            product.user = req.body.user

            product.save()
                .then(() => res.json("Product was updated"))
                .catch(error => res.json("Error"));
            
        } )
        .catch(error => res.json("Error finding product"))
});

router.route('/delete/:id').delete((req,res) => {
    ProductModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("Product Deleted"))
        .catch(error => res.json("Error"));
})

module.exports = router;