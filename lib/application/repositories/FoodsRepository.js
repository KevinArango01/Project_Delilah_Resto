class FoodsRepository {
	constructor(repository) {
		this.repository = repository
	}

    getAllFoods() {
		return this.repository.getAllFoods()
	}

    createFood(foodData) {
        return this.repository.createFood(foodData)
    }

    updateFood(id,foodData) {
        return this.repository.updateFood(id,foodData)
    }
    
    deleteFoodById(id){
        return this.repository.deleteFoodById(id)
    }
}

module.exports = { FoodsRepository }