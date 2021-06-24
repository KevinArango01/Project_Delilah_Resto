const { Foods } = require('../../infrastructure/database/models/Foods')

module.exports = class {
	constructor() {
		this.model = Foods
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

	
}
