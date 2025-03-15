const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ firstname, lastname, email, password, vehicle }) => {
    if (!firstname || !email || !password || !vehicle || !vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.vehicletype) {
        throw new Error('Please provide all the required fields');
    }

    const captain = await captainModel.create({
        firstname, 
        lastname, 
        email, 
        password, 
        vehicle
    });

    return captain;
};

