const {
	GetFoods,
	CreateFood,
    DeleteFoodById,
    UpdateFood,
} = require('../../application/use_case/index')

module.exports = {

	async getFoods(req, res, next) {
		try {
			const findAllFoodsResult = await GetFoods()
		
			res.status(200).send(findAllFoodsResult)
			next(findAllFoodsResult)

		} catch (error) {
			next(error)
		}
	},

	async createFood(req, res, next) {
		try {
			const dataRequest = req.body
			const result = await CreateFood(dataRequest)
			
			res.status(200).send(result)
			next(result)

		} catch (error) {
			next(error)
		}
	},

    async deleteFoodById(req, res, next) {
		try {
			const getIdRequest = req.params.id
			const result = await DeleteFoodById(getIdRequest)

			res.status(200).send(result)
			next(result)

		} catch (error) {
			next(error)
		}
	},

    async updateFood(req, res, next) {
		try {
			const getIdRequest = req.params.id
            const dataRequest = req.body

			const result = await UpdateFood(getIdRequest, dataRequest)

			res.status(200).send(result)
			next(result)

		} catch (error) {
			next(error)
		}
	},
}
