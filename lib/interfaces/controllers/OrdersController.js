const jwt_decode = require('jwt-decode')

const {
	CreateOrder,
	GetAllOrders,
	UpdateStatusOrder,
} = require('../../application/use_case/index')

module.exports = {

    async createOrder(req, res, next) {
		try {
            const order = req.body
            const token = jwt_decode(req.headers['authorization'])

			const result = await CreateOrder(token, order)
		
			res.status(200).send(result)
			next(result)

		} catch (error) {
			next(error)
		}
	},

	async getAllOrders(req, res, next) {
		try {
			const findAllDetailsResult = await GetAllOrders()
		
			res.status(200).send(findAllDetailsResult)
			next(findAllDetailsResult)

		} catch (error) {
			next(error)
		}
	},

	async updateStatusOrder(req, res, next) {
		try {
			const getIdRequest = req.params.id
            const dataRequest = req.body

			const result = await UpdateStatusOrder(getIdRequest, dataRequest)

			res.status(200).send(result)
			next(result)

		} catch (error) {
			next(error)
		}
	},
}
