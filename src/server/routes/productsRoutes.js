const express = require('express');
const router = express.Router();
const ProductModel = require('../models/products');

//Adds new product into the database
router.route('/create').post((req,res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const stock = req.body.stock;
    const categories = req.body.categories;
    const user = req.body.user;

    const NewProduct = new ProductModel({name, description, price, image, stock, categories, user});


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

// Remove product from user cart
router.route('/removeFromCart/:id').post((req,res) => {
    ProductModel.findById(req.params.id)
    .then(product => {

        const index = product.inUserCart.indexOf(req.body.email);
        if (index > -1) {
            product.inUserCart.splice(index, 1); // 2nd parameter means remove one item only
        }
        product.save()
            .then(() => console.log("Product was updated in the database"))
            .catch(error => console.log(error));
    } )
    .catch(error => res.json("Error finding product"))

});

// Remove product from user cart
router.route('/AddtoCart/:id').post((req,res) => {
    console.log("Adding to cart");
    ProductModel.findByIdAndUpdate(req.params.id)
    .then(product => {
        product.inUserCart.push(req.body.email);

        
        product.save()
            .then(() => console.log("Product was updated in the database"))
            .catch(error => console.log(error));
    } )
    .catch(error => res.json("Error finding product"))

});



module.exports = router;