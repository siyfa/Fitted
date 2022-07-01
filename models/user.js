const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    role: {
        type: String,
        enum: ['superAdmin', 'user'],
        default: 'user'
    },
    password: String,
    email: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('User', userSchema);