const FoodsStorage = require('../../interfaces/storage/FoodsRepository')
const {FoodsRepository} = require('../repositories/FoodsRepository')

const foodRespository = new FoodsRepository(new FoodsStorage())

module.exports = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const foods = await foodRespository.getAllFoods()
			resolve(foods)
		} catch (error) {
			reject(error)
		}
	})
}
