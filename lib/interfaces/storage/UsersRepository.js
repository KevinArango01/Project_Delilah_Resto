const { Users } = require('../../infrastructure/database/models/Users')
module.exports = class {
	constructor() {
		this.model = Users
	}

	signIn(username, password) {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await this.model.findOne({
                    where:{
                           username, 
                           password
                    }
                })

				if (result) {
					resolve(result)
				}
				resolve({
					message: 'The user data is invalid',
					status: false,
				})
			} catch (error) {
				reject(error)
			}
		})
	}

	signUp(userData) {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await this.model.create(userData)

				if (result) {
					resolve({
						data: result,
						message: 'INSERT SUCCESS',
						status: true,
					})
				}

				resolve({
					data: result,
					message: 'INSERT ERROR',
					status: false,
				})
			} catch (error) {

				reject(error)
			}
		})
	}

	getUserData(id) {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await this.model.findOne({
                    where:{ id }
                })

				if (result) {
					resolve({
						User: result.dataValues,
						status: true,
					})
					return
				}
				resolve({})
			} catch (error) {

				reject(error)
			}
		})
	}
}