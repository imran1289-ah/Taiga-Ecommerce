const { validationResult } = require('express-validator');
const UserModel = require('../models/user');
const auth = require('../auth');

exports.registerUser = function (req, res) {
    // Handle validation errors during routing
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 'errors': errors.array() });
    }

    // Create new salt and use it to hash password
    const saltAndHash = auth.generateNewPassword(req.body.password);

    // Create a new user document
    const newUser = new UserModel({
        email: req.body.email,
        name: req.body.name,
        hashedPassword: saltAndHash.hash,
        salt: saltAndHash.salt,
        userType: req.body.userType
    });
    newUser.save(function (err) {
        // Return an error if the user cannot be saved in the database
        if (err) {
            console.log(err);
            return res.status(500).send('Could not create new user in database.');
        }
        // Return a success message and print the user data to the console for logging
        console.log('Registered new user:');
        console.log(JSON.stringify(newUser));
        res.status(201).end();
    });
}

exports.loginSuccess = function (req, res) {
    // If this callback is called, passport.authenticate was successful
    console.log('User logged with email: ' + req.body.email);
    res.status(200).end();
}

exports.logoutUser = function (req, res) {
    console.log("logging out");
    req.logout();
    res.status(200).end();
}