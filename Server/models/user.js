const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 3,
        max: 12,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        min: 6,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema)