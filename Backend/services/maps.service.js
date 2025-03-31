const axios = require('axios');
const captainModel = require('../models/captain.model')

module.exports.getAddressCoordinates = async (address) => {
    try {
        const apiKey = process.env.GO_MAPS_API;
        const response = await axios.get(`https://maps.gomaps.pro/maps/api/geocode/json`, {
            params: {
                address: address,
                key: apiKey
            }
        });

        if (response.data && response.data.results && response.data.results.length > 0) {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lang: location.lng
            };
        } else {
            throw new Error('No results found for the given address.');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw error;
    }
};

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required.');
    }
    const apiKey = process.env.GO_MAPS_API;
    const response = await axios.get(`https://maps.gomaps.pro/maps/api/distancematrix/json`, {
        params: {
            origins: origin,
            destinations: destination,
            key: apiKey
        }
    });
    if (response.data && response.data.rows && response.data.rows.length > 0) {
        const element = response.data.rows[0].elements[0];
        return {
            distance: element.distance.text,
            duration: element.duration.text
        };
    } else {
        throw new Error('No results found for the given origin and destination.');
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('Input is required.');
    }

    const apiKey = process.env.GO_MAPS_API;
    const response = await axios.get(`https://maps.gomaps.pro/maps/api/place/autocomplete/json`, {
        params: {
            input: input,
            key: apiKey
        }
    })
    if (response.data && response.data.predictions) {
        return response.data.predictions.map(prediction => prediction.description);
    } else {
        throw new Error('No suggestions found for the given input.');
    }
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[ltd, lng], radius / 6371] // radius in KM
            }
        }
    });    
    return captains;
}