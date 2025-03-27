const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({ 
            user: req.user._id,  // user is taken from req.user
            origin, 
            destination, 
            vehicleType 
        });

        return res.status(201).json(ride);  
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination, vehicleType } = req.query;

    try {
        if (vehicleType) {
            const fare = await rideService.getFare(origin, destination, vehicleType);
            return res.status(200).json({ fare });
        } else {
            // Return fare for all vehicle types
            const vehicleTypes = ["car", "motorcycle", "auto"];
            const fares = {};
            for (const type of vehicleTypes) {
                fares[type] = await rideService.getFare(origin, destination, type);
            }
            return res.status(200).json({ fares });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
