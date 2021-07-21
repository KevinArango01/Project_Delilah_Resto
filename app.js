require('dotenv').config()
const express = require('express')


const port = process.env.PORT || 3000

const app = express()

const AuthMiddleware = require('./lib/interfaces/middlewares/AuthMiddleware')

const {
    sinIn,
} = require('./lib/interfaces/controllers/UsersController')
const {
    getFoods,
} = require('./lib/interfaces/controllers/FoodsController')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/foods', AuthMiddleware, getFoods)
app.post('/login', sinIn)

app.listen(port, () => console.log(`Listening on: http://localhost:${port}`))

module.exports = { app }