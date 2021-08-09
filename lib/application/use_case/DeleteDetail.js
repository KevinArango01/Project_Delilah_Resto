const OrderDetailsStorage = require('../../interfaces/storage/OrderDetailsRepository')
const {OrderDetailsRepository} = require('../repositories/OrderDetailsRepository')

const orderDetailsRepository = new OrderDetailsRepository(new OrderDetailsStorage())

module.exports = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await orderDetailsRepository.deleteDetail(id)
			resolve(result)

		} catch (error) {
			reject(error)
		}
	})
}