const express = require("express")
const router = express.Router()
const User = require('../models/user')
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
router.get('/:id', getUser, (req, res) => {
    res.json(res.user)
})

// Creating one
router.post('/register', async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Login
router.post("/login", async (req, res) => {
    console.log(req.body);
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      if(user.password!==req.body.password)
        return res.status(400).json({ message: "Authentication failed" });
        
    }
    
        catch (error) {
            console.log(error);
            res.status(500).json(error);
          }
         
        });

// Updating One
/*router.patch('/:id', getUser, async (req, res) => {
    if (req.body.username != null) {
        res.subscriber.username = req.body.username
    }
    if (req.body.username != null) {
        res.subscriber.username = req.body.username
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})*/

// Deleting One
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
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