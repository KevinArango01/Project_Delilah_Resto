const OrderDetailsStorage = require('../../interfaces/storage/OrderDetailsRepository')
const {OrderDetailsRepository} = require('../repositories/OrderDetailsRepository')

const OrderDetailsRespository = new OrderDetailsRepository(new OrderDetailsStorage())

module.exports = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const detail = await OrderDetailsRespository.getAllDetailsByIdOrder(id)
			resolve(detail)

		} catch (error) {
			reject(error)
		}
	})
}