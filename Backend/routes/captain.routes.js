const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('firstname').isLength({ min: 2 }).withMessage('Firstname should be at least 2 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color should be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate should be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity should be at least 1'),
    body('vehicle.vehicletype').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehical type should be car, motorcycle or auto')
],
    captainController.registerCaptain
);

router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long')
],
    captainController.loginCaptain
);

router.get('/profile', authMiddleware.authCaptain, captainController.getcaptainProfile);

router.get('/logout',authMiddleware.authCaptain, captainController.logoutCaptain)
module.exports = router;