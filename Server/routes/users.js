const express = require("express")
const router = express.Router()
const User = require('../models/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Getting all
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:username', getUser, (req, res) => {
    try {
        res.status(200).json(res.user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

// Creating one
router.post('/register', async (req, res) => {

    const usernameTaken = await User.findOne({ username: req.body.username });
    const emailTaken = await User.findOne({ email: req.body.email });

    if (usernameTaken)
        return res.status(500).json({ message: "Username already in use" });
    if (emailTaken)
        return res.status(500).json({ message: "Email already in use" });
    else {
        try {
            //Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            console.log(hashedPassword);
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
                age: "unknown",
                country: "unknown",
                gender: "unknown",
                description: "You haven't made a description yet",
                band: "unknown",
                singer: "unknown",
                song: "unknown",
                friends: ["Bff4eva", "luka"],
            })

            const newUser = await user.save()
            res.status(201).json(newUser)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
});

//Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(404).json({ message: "User not found" });

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword)
            return res.status(400).json({ message: "Authentication failed" });

        const token = jwt.sign(
            { username: user.username, email: user.email },
            process.env.SECRET_TOKEN
        );

        const { username, email } = user._doc;
        res.status(200).json({ token, username, email });
    }

    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

});

//UPDATE USER
router.put("/:username", async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            { username: req.body.username },
            {
                $set: req.body,
            },
            { new: true }
        );

        const { username, profilePic, age, country, gender, description, band, singer, song, gif } = user;
        res.status(200).json({ username, profilePic, age, country, gender, description, band, singer, song, gif });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

// Deleting One
router.delete('/:username', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get friends
router.get("/friends/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const friends = await Promise.all(
            user.friends.map(
                async (friend) => await User.findOne({ username: friend })
            )
        );
        res.status(200).json(friends);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


async function getUser(req, res, next) {
    let user
    try {
        user = await User.findOne({ username: req.params.username });
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}

module.exports = router