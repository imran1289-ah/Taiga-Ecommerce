const crypto = require('crypto');

// Function to validate a password during login requests
exports.validatePassword = function (password, hash, salt) {
    // Create a hashed password from the user input and compare it to the hash stored in the database
    var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}
// Function to generate a salt and hash for a new password on registration or password change
exports.generateNewPassword = function (password) {
    // Generate a random salt for the user's password then compute the hash
    var salt = crypto.randomBytes(32).toString('hex');
    var hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return { salt: salt, hash: hash };
}

exports.requireLoggedIn = function (req, res, next) {
    if (!req.isAuthenticated()) {
        console.log("Not logged in")
        return res.status(401).end();
    }
    next();
}