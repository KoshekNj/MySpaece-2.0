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
    },
    profilePic: {
        type: String,
    },
    age: {
        type: String,
    },

    country: {
        type: String,

    },
    gender: {
        type: String,

    },
    description: {
        type: String,

    },
    band: {
        type: String,

    },
    singer: {
        type: String,
    },
    song: {
        type: String,
    },
    gif: {
        type: String,
    },
    friends: {
        type: [],
    },
})

module.exports = mongoose.model('User', userSchema)