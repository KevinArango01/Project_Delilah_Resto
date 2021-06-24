class UsersRepository {
	constructor(repository) {
		this.repository = repository
	}

    SinIn(username, password) {
		return this.repository.SinIn(username, password)
	}

}

module.exports = { UsersRepository }