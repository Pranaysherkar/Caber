const rideModel = require('../models/ride.model');
const mapsService = require('./maps.service');
const crypto = require('crypto'); // we use crypto to generate OTPs

async function getFare(origin, destination, vehicleType) {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required.');
    }

    if (!['car', 'motorcycle', 'auto'].includes(vehicleType)) {
        throw new Error('Invalid vehicle type.'); // Ensure valid vehicleType
    }

    const distanceTime = await mapsService.getDistanceTime(origin, destination);

    // Extract numbers from distance: "149 km" or duration: "3 hours 2 mins"
    let distanceMatch = distanceTime.distance.replace(/,/g, '').match(/\d+/g);
    let durationMatch = distanceTime.duration.match(/\d+/g);

    if (!distanceMatch || !durationMatch) {
        throw new Error('Invalid distance or duration from maps service.');
    }
    // Convert extracted values to numbers
    let distance = parseFloat(distanceMatch.join('')); // Handles large numbers correctly

    // Convert hours to minutes if present
    let duration = parseFloat(durationMatch[0]) * 60; // Convert hours to minutes
    if (durationMatch[1]) {
        duration += parseFloat(durationMatch[1]); // Add extra minutes
    }

    let fare;
    switch (vehicleType) {
        case 'car':
            fare = distance * 16 + duration * 2; // ₹16 per km + ₹2 per minute
            break;
        case 'motorcycle':
            fare = distance * 5 + duration * 1; // ₹8 per km + ₹1 per minute
            break;
        case 'auto':
            fare = distance * 9 + duration * 1.5; // ₹10 per km + ₹1.5 per minute
            break;
        default:
            throw new Error('Invalid vehicle type.');
    }

    return fare;
}

module.exports.getFare = getFare;

//OTP generation function
function getOtp(num) {
    if (!num || typeof num !== 'number' || num <= 0) {
        throw new Error('Invalid OTP length.');
    }
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;
}


module.exports.createRide = async ({ user, origin, destination, vehicleType }) => {
    if (!user || !origin || !destination || !vehicleType) {
        throw new Error('All fields are required.');
    }

    const fare = await getFare(origin, destination, vehicleType);

    const ride = await rideModel.create({
        user,
        origin,
        destination,
        vehicleType,
        otp: getOtp(6), // Generate 4-digit OTP
        fare
    });

    return ride;
};
