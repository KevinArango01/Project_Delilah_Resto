class UsersRepository {
	constructor(repository) {
		this.repository = repository
	}

    SignIn(username, password) {
		return this.repository.signIn(username, password)
	}

	SignUp(userData) {
		return this.repository.signUp(userData)
	}

	GetUserData(id) {
		return this.repository.getUserData(id)
	}

}

module.exports = { UsersRepository }