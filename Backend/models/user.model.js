const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: [2, "Firstname should be at least 2 characters long."],
    },
    lastname: {
        type: String,
        trim: true,
        minlength: [2, "Lastname should be at least 2 characters long."],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        minlength: [6, "Email should be at least 6 characters long."],
    },
    password: {
        type: String,
        required: true,
        select:false,
        trim: true,
        minlength: [6, "Password should be at least 6 characters long."]
    },
    socketId: {
        type: String,
        default: null,
    }
});

userSchema.methods.generateAuthToken = function () {
    const token= jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel; 
