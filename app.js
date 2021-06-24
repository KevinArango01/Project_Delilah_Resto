require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')


const port = process.env.PORT || 3000

const app = express()

const {
    sinIn,
} = require('./lib/interfaces/controllers/UsersController')
const {
    getFoods,
} = require('./lib/interfaces/controllers/FoodsController')

app.use(express.json())

app.get('/foods', getFoods)
app.post('/login', sinIn)

module.exports = { app }

app.listen(port, () => console.log(`Listening on: http://localhost:${port}`))