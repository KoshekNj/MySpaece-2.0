const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        unique:false,
    },

    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date:{
        type:Date,
    }
    
})

module.exports = mongoose.model('Post', postSchema)