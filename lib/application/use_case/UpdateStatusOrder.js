const OrdersStorage = require('../../interfaces/storage/OrdersRepository')
const {OrdersRepository} = require('../repositories/OrdersRepository')

const ordersRepository = new OrdersRepository(new OrdersStorage())

module.exports = (id,status) => {
	return new Promise(async (resolve, reject) => {
		try {
			const order = await ordersRepository.updateStatusOrder(id,status)
			resolve(order)

		} catch (error) {
			reject(error)
		}
	})
}