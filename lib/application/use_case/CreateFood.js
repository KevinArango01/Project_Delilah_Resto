const FoodsStorage = require('../../interfaces/storage/FoodsRepository')
const {FoodsRepository} = require('../repositories/FoodsRepository')

const foodsRepository = new FoodsRepository(new FoodsStorage())

module.exports = (foodData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const food = await foodsRepository.createFood(foodData)
			resolve(food)

		} catch (error) {
			reject(error)
		}
	})
}