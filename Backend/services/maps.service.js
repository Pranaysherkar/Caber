const axios = require('axios');

module.exports.getAddressCoordinates = async (address) => {
    try {
        const apiKey = process.env.GO_MAPS_API ; 
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