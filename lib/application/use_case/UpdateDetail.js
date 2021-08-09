const OrderDetailsStorage = require('../../interfaces/storage/OrderDetailsRepository')
const {OrderDetailsRepository} = require('../repositories/OrderDetailsRepository')

const orderDetailsRepository = new OrderDetailsRepository(new OrderDetailsStorage())

module.exports = (id, data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const orderDetail = await orderDetailsRepository.updateDetail(id, data)
			resolve(orderDetail)

		} catch (error) {
			reject(error)
		}
	})
}