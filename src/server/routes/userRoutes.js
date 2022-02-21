const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/userController');
const auth = require('../auth');

// Register new account - POST {email, name, password, user type}
router.post('/register', userController.registerUser);

// Login to existing account - POST {email, password}
router.post('/login', passport.authenticate('local'), userController.loginSuccess);

// Logout endpoint
router.get('/logout', auth.requireLoggedIn, userController.logoutUser);

module.exports = router;