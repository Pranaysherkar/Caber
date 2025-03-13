const userModel = require('../models/user.model');
// this function will be called by the controller to create a new user
// it will return the user object if the user is created successfully 

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    
    if (!firstname || !email || !password) {
        throw new Error('Please provide all the required fields');
    }
    const user = await userModel.create({ firstname, lastname, email, password });

    return user

};