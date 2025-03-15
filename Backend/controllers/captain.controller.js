const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model')

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, password, vehicle } = req.body;

    const isCaptainExist = await captainModel.findOne({ email });

    if (isCaptainExist) {
        return res.status(400).json({ message: 'Captain already exists' });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        vehicle
    });

    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });

};

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select('+password')

    if (!captain) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await captain.comparePassword(password);

    // If password does not match, send error response
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate authentication token for the user
    const token = captain.generateAuthToken();

    // Set token in cookie
    res.cookie('token', token);

    // Send response with token and user details
    res.status(201).json({ token, captain });

}

module.exports.getcaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain = async (req, res, next) => {

    try {
        // Clear token cookie
        res.clearCookie('token');

        // Get token from cookie or header
        const token = req.cookies?.token || req.headers.authorization?.split(' ')?.[1];

        // Check if token exists before blacklisting
        if (token) {
            await blacklistTokenModel.create({ token });
        }

        // Send response
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        next(error); // Pass error to global error handler
    }
}