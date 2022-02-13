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

// Set up connect-mongo and express-session to track user login sessions
const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' });
app.use(session({
    secret: 'devSecret', // Used to generate unique session authentication hashes, change to random value before deployment
    resave: false,
    saveUninitialized: true,
    store: sessionStore
}));

function validatePassword(password, hash, salt) {
    // Create a hashed password from the user input and compare it to the hash stored in the database
    var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}
function generateNewPassword(password) {
    // Generate a random salt for the user's password then compute the hash
    var salt = crypto.randomBytes(32).toString('hex');
    var hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return { salt: salt, hash: hash };
}

app.get('/', (req, res) => {
    res.send('Hello world from server!');
});
app.get('/testAPI', (req, res) => {
    res.send('Test from server - connection succesful!');
});

app.listen(port, () => {
    console.log('Taiga server listening on port ' + port);
});
