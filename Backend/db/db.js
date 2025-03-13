const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(process.env.DB_CONNECTION).then(() => console.log("MongoDB connected successfully!"))
        .catch(err => console.error("MongoDB connection error:", err));
}

module.exports = connectToDB;