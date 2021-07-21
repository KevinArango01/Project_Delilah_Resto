const { Users } = require('../../infrastructure/database/models/Users')
module.exports = class {
	constructor() {
		this.model = Users
	}

	sinIn(username, password) {
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
					return
				}
				resolve({})
			} catch (error) {

				reject(error)
			}
		})
	}
}
