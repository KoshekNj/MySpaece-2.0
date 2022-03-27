require('dotenv').config()
const cors = require("cors");

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to database"))
app.use(express.json())

app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
)
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const postsRouter = require('./routes/posts')
app.use('/posts', postsRouter)

app.listen(8080, () => console.log('Server started'))

