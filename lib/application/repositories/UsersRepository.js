class UsersRepository {
	constructor(repository) {
		this.repository = repository
	}

    SinIn(username, password) {
		return this.repository.sinIn(username, password)
	}

}

module.exports = { UsersRepository }