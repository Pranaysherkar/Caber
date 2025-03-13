const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register', [ 
    body('firstname').isLength({ min: 2 }).withMessage('Firstname should be at least 2 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long')
],
    userController.registerUser 
);

module.exports = router;