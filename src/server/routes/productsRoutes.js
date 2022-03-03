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

module.exports = router;