const UsersStorage = require('../../interfaces/storage/UsersRepository')
const {UsersRepository} = require('../repositories/UsersRepository')

const usersRespository = new UsersRepository(new UsersStorage())

module.exports = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = await usersRespository.GetUserData(id)
			resolve(user)

		} catch (error) {
			reject(error)
		}
	})
}