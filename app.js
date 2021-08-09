require('dotenv').config()
const express = require('express')

const port = process.env.PORT || 3000

const app = express()

const AuthMiddleware = require('./lib/interfaces/middlewares/AuthMiddleware')
const PermissionMiddleware = require('./lib/interfaces/middlewares/PermissionMiddleware')

//USERS
const {
    signIn,
    signUp,
    getUserData,
} = require('./lib/interfaces/controllers/UsersController')

//FOODS
const {
    getFoods,
    createFood,
    updateFood,
    deleteFoodById,
} = require('./lib/interfaces/controllers/FoodsController')

//ORDERSDETAILS
const {
    getAllDetailsByIdOrder,
    addDetail,
    updateDetail,
    deleteDetail,
} = require('./lib/interfaces/controllers/DetailsController')

//ORDERS
const {
    createOrder,
    getAllOrders,
    updateStatusOrder,
} = require('./lib/interfaces/controllers/OrdersController')


app.use(express.json())
app.use(express.urlencoded({extended: false}))

//USERS
app.post('/signin', signIn)
app.post('/signup', signUp)
app.get('/userdata/:id', AuthMiddleware, getUserData)

//FOODS
app.get('/foods', getFoods)
app.post('/food', AuthMiddleware, PermissionMiddleware, createFood)
app.put('/food/:id', AuthMiddleware, PermissionMiddleware, updateFood)
app.delete('/food/:id', AuthMiddleware, PermissionMiddleware, deleteFoodById)

//DETAILS
app.get('/shoppingcart/:id',AuthMiddleware, getAllDetailsByIdOrder)
app.post('/itemshoppingcart',AuthMiddleware, addDetail)
app.put('/itemshoppingcart/:id',AuthMiddleware, updateDetail)
app.delete('/itemshoppingcart/:id',AuthMiddleware, deleteDetail)

//ORDERS
app.post('/generateorder',AuthMiddleware, createOrder)
app.get('/orders',AuthMiddleware, getAllOrders)
app.put('/order/updatestatus/:id',AuthMiddleware, PermissionMiddleware, updateStatusOrder)

app.listen(port, () => console.log(`Listening on: http://localhost:${port}`))

module.exports = { app }