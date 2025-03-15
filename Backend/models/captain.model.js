const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: [2, "Fullname should be at least 2 characters long."],
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
        select: false, // this will prevent the password from being returned in any query
        trim: true,
        minlength: [6, "Password should be at least 6 characters long."]
    },
    socketId: {
        type: String,
        default: null,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "Color should be at least 3 characters long."]
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, "Plate should be at least 3 characters long."]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity should be at least 1."]
        },
        vehicletype: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        },
        location: {
            lat: {
                type: Number,
            },
            lng: {
                type: Number,
            }
        }
    }
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("Captain", captainSchema);

module.exports = captainModel;