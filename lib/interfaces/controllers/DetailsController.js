const jwt_decode = require('jwt-decode')

const {
	GetAllDetails, 
    AddDetail,
    UpdateDetail,
    DeleteDetail,
} = require('../../application/use_case/index')

module.exports = {

	async getAllDetailsByIdOrder(req, res, next) {
		try {
            const getIdRequest = req.params.id
			const findAllDetailsResult = await GetAllDetails(getIdRequest)
		
			res.status(200).send(findAllDetailsResult)
			next(findAllDetailsResult)

		} catch (error) {
			next(error)
		}
	},

    async addDetail(req, res, next) {
		try {
            const data = req.body
            const token = jwt_decode(req.headers['authorization'])

			const result = await AddDetail(token, data)
		
			res.status(200).send(result)
			next(result)

		} catch (error) {
			next(error)
		}
	},

    async updateDetail(req, res, next) {
		try {
			const getIdRequest = req.params.id
            const dataRequest = req.body

			const result = await UpdateDetail(getIdRequest, dataRequest)

			res.status(200).send(result)
			next(result)

		} catch (error) {
			next(error)
		}
	},

    async deleteDetail(req, res, next) {
		try {
			const getIdRequest = req.params.id
			const result = await DeleteDetail(getIdRequest)

			res.status(200).send(result)
			next(result)

		} catch (error) {
			next(error)
		}
	},
}
