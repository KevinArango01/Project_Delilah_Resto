const { Foods } = require('../../infrastructure/database/models/Foods')

module.exports = class {
	constructor() {
		this.model = Foods
	}

	createFood(foodData){
		return new Promise(async (resolve, reject) => {
			try{
				const result = await this.model.create(foodData)
				if(result){
					resolve({
						data: result,
						message: 'INSERT SUCCESS'
					})
				}
			} catch(error){
				reject(error)
			}
		})
	}

	getAllFoods() {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await this.model.findAll()
				if (result) {
					resolve(result)
					return
				}
				resolve({})
			} catch (error) {
				reject(error)
			}
		})
	}

	updateFood(id,foodData){
		return new Promise(async (resolve, reject) => {
			try{
				const result = await this.model.update(foodData,{
					where: { id },
				})
				if(result){
					resolve({
						id,
						message: 'UPDATE SUCCESS',
						status: true,
					})
				}
					resolve({
						id,
						message: 'UPDATE ERROR, FOOD NOT FOUNT',
						status: false,
					})
			} catch(error){
				reject(error)
			}
		})
	}

	deleteFoodById(id){
		return new Promise(async (resolve, reject) => {
			try{
				const result = await this.model.destroy({
					where: { id },
				})
				if(result){
					resolve({
						id,
						message: 'DELETE SUCCESS',
						status: true,
					})
				}
					resolve({
						id,
						message: 'DELETE ERROR, FOOD NOT FOUNT',
						status: false,
					})
			} catch(error){
				reject(error)
			}
		})
	}
}
