const OrdersStorage = require('../../interfaces/storage/OrdersRepository')
const {OrdersRepository} = require('../repositories/OrdersRepository')

const ordersRepository = new OrdersRepository(new OrdersStorage())

module.exports = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const order = await ordersRepository.getAllOrders()
			resolve(order)

		} catch (error) {
			reject(error)
		}
	})
}