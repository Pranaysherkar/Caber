const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Route to register a new user with validation
router.post('/register', [ 
    body('firstname').isLength({ min: 2 }).withMessage('Firstname should be at least 2 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long')
],
    userController.registerUser 
);

// Route to login an existing user with validation
router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long')
], 
    userController.loginUser
);

// Route to get the profile of the logged-in user
router.get('/profile',authMiddleware.authUser, userController.getUserProfile);

// Route to logout the logged-in user
router.get('/logout', authMiddleware.authUser, userController.logoutUser);

module.exports = router;