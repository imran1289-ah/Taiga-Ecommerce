const express = require('express');
const passport = require('passport');
const { body } = require('express-validator');
const sanitize = require('mongo-sanitize');
const router = express.Router();

const UserModel = require('../models/user');
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

module.exports = router;