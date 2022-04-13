// Imports of npm packages
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');

// Imports of local modules
const auth = require('./auth');
const userRouter = require('./routes/userRoutes');
const UserModel = require('./models/user');
const ProductsModel = require('./models/products');
const productRouter = require('./routes/productsRoutes');
const adminRouter = require('./routes/adminRoutes');

// React runs on port 3000 by default
const port = 9000;
const app = express();

// Add Express.js middleware for request handling
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // <= Accept credentials (cookies) sent by the client
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize the database connection
const env = process.env.NODE_ENV || 'development';
if (env === 'test') {
  process.env.MONGO_URI = 'mongodb://localhost:27017/taiga-test';
} else {
  process.env.MONGO_URI = 'mongodb://localhost:27017/taiga';
}

mongoose.connect(process.env.MONGO_URI);

// Set up connect-mongo and express-session to track user login sessions
app.use(session({
  secret: 'devSecret', // Used to generate unique session authentication hashes, change to random value before deployment
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
  })
}));

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
        if (!user) { return callback(null, false); }

        // User found, validate the supplied password
        if (auth.validatePassword(password, user.hashedPassword, user.salt)) {
          // Correct password, call the callback function with no error and the found user
          return callback(null, user);
        } else {
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
  callback(null, user.id);
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

// Register the endpoint routes with the express app
app.use('/users', userRouter);

// Api endpoing for creating/updating/deleting products
app.use('/products', productRouter);

// Api endpoint for creating/updating/deleting users
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  res.send('Hello world from server!');
});
app.get('/testAPI', (req, res) => {
  res.send('Test from server - connection succesful!');
});

app.listen(port, () => {
  console.log('Taiga server listening on port ' + port + ' with environment set to ' + env);
});
