const express = require('express');
const passport = require('passport');
const { body } = require('express-validator');
const sanitize = require('mongo-sanitize');
const router = express.Router();
const UserModel = require('../models/user');
const ProductModel = require('../models/products');
const userController = require('../controllers/userController');
const auth = require('../auth');

// Register new account - POST {email, name, password, user type}
// Returns 201 on success
// Returns 400 on invalid request body, response body includes errors
// Returns 500 on other errors
router.post('/register', 
    body('email').custom(value => {
        // Custom email validator checks that a user with the supplied email doesn't already exist
        return UserModel.findOne({email: sanitize(value)}).then(user => {
            if (user) {
                return Promise.reject("Email already in use.");
            }
        });
    }),
    body('name').exists(),
    body('password').exists(),
    body('userType').exists(),
    userController.registerUser);

// Login to existing account - POST {email, password}
// Returns 200 on success
// Returns 400 on invalid request body
// Returns 401 on invalid credentials
router.post('/login', 
    passport.authenticate('local'), 
    userController.loginSuccess);

// Logout endpoint
// Returns 200 on success
router.get('/logout', auth.requireLoggedIn, userController.logoutUser);













//Delete a user
router.route('/ban/:id').delete((req,res) => {
    UserModel.findByIdAndDelete(req.params.id)
        .then(() => {
            console.log("User Deleted in the database");
            res.end();
        })
        .catch(error => console.log("Error"));
})

//Update user's information
router.route('/update/:email').post((req,res) => {
    var name;
    var email;
    console.log(req.params.email)
    UserModel.findOneAndUpdate({email: req.params.email})
        .then(user => {
            user.email = req.body.email;
            email = user.email;
            user.name = req.body.name;
            name = user.name;
            user.save()
                .then(() => {
                    console.log("User was updated in the database");
                    res = user;
                })
                
                .catch(error => console.log(error));
        } )
        .catch(error => res.json("Error finding user"));   
});

// ProductModel.findById(req.params.id)
// .then(product => {

//     const index = product.inUserCart.indexOf(req.body.email);
//     if (index > -1) {
//         product.inUserCart.splice(index, 1); // 2nd parameter means remove one item only
//     }
//     product.save()
//         .then(() => console.log("Product was updated in the database"))
//         .catch(error => console.log(error));
// } )

//Update user's password
router.route('/updatePassword/:id').post((req,res) => {
    UserModel.findOneAndUpdate({email: req.params.email})
        .then(user => {
            
            const saltAndHash = auth.generateNewPassword(req.body.hashedPassword);
            user.hashedPassword = saltAndHash.hash
            user.salt = saltAndHash.salt
            user.save()
                .then(() => {
                    console.log("User password was updated in the database");
                    res.end();
                })
                .catch(error => console.log(error)); 
        } )
        .catch(error => res.json("Error finding user"))
});

module.exports = router;