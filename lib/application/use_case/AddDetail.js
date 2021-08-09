const OrderDetailsStorage = require('../../interfaces/storage/OrderDetailsRepository')
const {OrderDetailsRepository} = require('../repositories/OrderDetailsRepository')

const orderDetailsRepository = new OrderDetailsRepository(new OrderDetailsStorage())

module.exports = (token, data) => {
	return new Promise(async (resolve, reject) => {
		const {
            id
        } = token
		const dataOrderDetail ={
			idOrder: id,
			quantity: data.quantity,
			idFood: data.idFood,
		} 
		try {
			const orderDetail = await orderDetailsRepository.addDetail(dataOrderDetail)
			resolve(orderDetail)

		} catch (error) {
			reject(error)
		}
	})
}