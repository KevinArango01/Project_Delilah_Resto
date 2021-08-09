const FoodsStorage = require('../../interfaces/storage/FoodsRepository')
const {FoodsRepository} = require('../repositories/FoodsRepository')

const foodsRepository = new FoodsRepository(new FoodsStorage())

module.exports = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const food = await foodsRepository.deleteFoodById(id)
			resolve(food)

		} catch (error) {
			reject(error)
		}
	})
}