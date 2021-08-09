const UsersStorage = require('../../interfaces/storage/UsersRepository')
const {UsersRepository} = require('../repositories/UsersRepository')

const usersRespository = new UsersRepository(new UsersStorage())

module.exports = (userData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const user = await usersRespository.SignUp(userData)
			resolve(user)

		} catch (error) {
			reject(error)
		}
	})
}