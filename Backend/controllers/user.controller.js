const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator'); 
const blacklistTokenModel = require('../models/blacklistToken.model');

// Register a new user
module.exports.registerUser = async (req, res, next) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Extract user details from request body
    const { firstname, lastname, email, password } = req.body;

    // Hash the user's password
    const hashedPassword = await userModel.hashPassword(password);

    // Create a new user
    const user = await userService.createUser({ firstname, lastname, email, password: hashedPassword });

    // Generate authentication token for the user
    const token = user.generateAuthToken();

    // Send response with token and user details
    res.status(201).json({ token, user });
}

// Login an existing user
module.exports.loginUser = async (req, res, next) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Extract email and password from request body
    const { email, password } = req.body;

    // Find user by email and include password in the query
    const user = await userModel.findOne({ email }).select('+password');

    // If user not found, send error response
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare provided password with stored hashed password
    const isMatch = await user.comparePassword(password);

    // If password does not match, send error response
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate authentication token for the user
    const token = user.generateAuthToken();

    // Set token in cookie
    res.cookie('token', token);

    // Send response with token and user details
    res.status(201).json({ token, user });
}

// Get the profile of the logged-in user
module.exports.getUserProfile = async (req, res, next) => {
    // Send response with user details from request
    res.status(200).json({ user: req.user });
}

module.exports.logoutUser = async (req, res, next) => {
    // Clear token cookie
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
       
    // Add token to blacklist
    await blacklistTokenModel.create({ token });

    // Send response
    res.status(200).json({ message: 'Logged out successfully' });
}

