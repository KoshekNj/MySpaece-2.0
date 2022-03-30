const express = require("express")
const router = express.Router()
const Post = require('../models/post')
const User = require('../models/user')

//Getting all posts from user
router.get("/:author", async (req, res) => {
    try {
        const posts = await (await Post.find({ author: req.params.author })).reverse()
        return res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error });
    }
});

//Create post 

router.post('/create', async (req, res) => {
    try {

        const post = new Post({
            author: req.body.author,
            title: req.body.title,
            text: req.body.text,
            date: req.body.date

        })

        const newPost = await post.save()
        res.status(201).json(newPost)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

module.exports = router;