const UsersStorage = require('../../interfaces/storage/UsersRepository')
const {UsersRepository} = require('../repositories/UsersRepository')

const usersRespository = new UsersRepository(new UsersStorage())

module.exports = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
            const {
                username,
                password,
            } = data
			const user = await usersRespository.SignIn(username, password)
			resolve(user)

		} catch (error) {
			reject(error)
		}
	})
}
