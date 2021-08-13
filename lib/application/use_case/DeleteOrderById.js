const OrdersStorage = require('../../interfaces/storage/OrdersRepository')
const {OrdersRepository} = require('../repositories/OrdersRepository')
const OrderDetailsStorage = require('../../interfaces/storage/OrderDetailsRepository')
const {OrderDetailsRepository} = require('../repositories/OrderDetailsRepository')

const OrderDetailsRespository = new OrderDetailsRepository(new OrderDetailsStorage())
const ordersRepository = new OrdersRepository(new OrdersStorage())

module.exports = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
            await OrderDetailsRespository.deleteDetailByIdOrder(id)
			const order = await ordersRepository.deleteOrderById(id)
			resolve(order)

		} catch (error) {
			reject(error)
		}
	})
}