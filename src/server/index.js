const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');

// React runs on port 3000 by default
const port = 9000;
const app = express();

// Add Express.js middleware for request handling
app.use(cors());

// Initialize the database connection
mongoose.connect('mongodb://localhost:27017/taiga');
const connection = mongoose.connection;

const UserModel = require('./models/user');

// Set up connect-mongo and express-session to track user login sessions
const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' });
app.use(session({
    secret: 'devSecret', // Used to generate unique session authentication hashes, change to random value before deployment
    resave: false,
    saveUninitialized: true,
    store: sessionStore
}));

// Function to validate a password during login requests
function validatePassword(password, hash, salt) {
    // Create a hashed password from the user input and compare it to the hash stored in the database
    var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}
// Function to generate a salt and hash for a new password on registration or password change
function generateNewPassword(password) {
    // Generate a random salt for the user's password then compute the hash
    var salt = crypto.randomBytes(32).toString('hex');
    var hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return { salt: salt, hash: hash };
}
// Tell passport how it should validate a login attempt
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, callback) {
        // Find a user in the DB with the supplied email address
        UserModel.findOne({ email: email })
            .then(user => {
                // No user found, call the callback function with no error and no user
                if (!user) { return callback(null, false) }

                // User found, validate the supplied password
                if (validatePassword(password, user.hash, user.salt)) {
                    // Correct password, call the callback function with no error and the found user
                    return callback(null, user);
                }
                else {
                    // User found but password incorrect, call the callback function with no error and no user
                    return callback(null, false);
                }
            })
            .catch(err => {
                callback(err);
            });
    }
));
// Tell passport how it should represent a user in the session store (i.e., by its uniquely generated ID)
passport.serializeUser(function (user, callback) {
    callback(null, user.id)
});
// Tell passport how it should go from the session store back to a full user object
passport.deserializeUser(function (id, callback) {
    UserModel.findById(id, function (err, user) {
        if (err) { return callback(err); }
        callback(null, user);
    });
});

// Finally, add passport middleware to the express app for authentication
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello world from server!');
});
app.get('/testAPI', (req, res) => {
    res.send('Test from server - connection succesful!');
});

app.listen(port, () => {
    console.log('Taiga server listening on port ' + port);
});
