const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Search all the user's in the database
router.get('/search', adminController.findAllUsers);

// Ban a user
router.delete('/ban/:id', adminController.banUser);

// Update user's information
router.post('/update/:id', adminController.updateUser);

// Update user's password
router.post('/updatePassword/:id', adminController.updatePassword);

module.exports = router;
