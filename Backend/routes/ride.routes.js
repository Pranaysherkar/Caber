const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post(
    '/create',
    [authMiddleware.authUser,
    body('origin')
        .isString()
        .isLength({ min: 3 })
        .withMessage('Invalid pickup address.'),
    body('destination')
        .isString()
        .isLength({ min: 3 })
        .withMessage('Invalid destination address.'),
    body('vehicleType')
        .isString().isIn(['car', 'motorcycle', 'auto'])
        .withMessage('Invalid vehicle type.')
    ],
    rideController.createRide
);

router.get('/get-fare',
    authMiddleware.authUser,
    query('origin').isString().isLength({ min: 3 }).withMessage('Invalid pickup address.'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address.'),
    rideController.getFare);
module.exports = router;
