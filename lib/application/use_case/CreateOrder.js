const OrdersStorage = require('../../interfaces/storage/OrdersRepository')
const OrderDetailsStorage = require('../../interfaces/storage/OrderDetailsRepository')

const {OrdersRepository} = require('../repositories/OrdersRepository')
const {OrderDetailsRepository} = require('../repositories/OrderDetailsRepository')

const ordersRepository = new OrdersRepository(new OrdersStorage())
const orderDetailsRepository = new OrderDetailsRepository(new OrderDetailsStorage())

module.exports = (token, order) => {
	return new Promise(async (resolve, reject) => {
		let totalPrice = 0
        const {
            id
        } = token

		const orderdetails = await orderDetailsRepository.getAllDetailsByIdOrder(id)
		if(JSON.stringify(orderdetails) !== '{}'){
		orderdetails.forEach(detail => {
			totalPrice = totalPrice + (detail.quantity * detail.Food.price)
		});
        const dataOrder = {
			idUser: id,
			date: order.date,
            totalPrice: totalPrice,
            idTypePayment: order.idTypePayment,
            idOrderStatus: order.idOrderStatus,
		} 
		try {
				const orderResult = await ordersRepository.createOrder(dataOrder)
				if(orderResult){
				const {
					id,
				} = orderResult.data.dataValues
				const result = await orderDetailsRepository.updateDetailByIdOrder(dataOrder.idUser, id)

				if(result){
					console.log('UPDATE DETAIL')
				}
			    resolve(orderResult)
        }else{
			resolve({
				message: "ORDER DETAILS, NOT FOUNT",
				status: false
			})
		}
		} catch (error) {
			reject(error)
		}
		}else{
			resolve({
				message: "ORDER DETAILS, NOT FOUNT",
				status: false
			})
		}
	})
}