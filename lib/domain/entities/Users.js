class UsersEntity {
	constructor({
		id,
        username,
        name,
        email,
        phone,
        address,
        password,
        role,
	}) {
		this.id = id
        this.username = username
		this.name = name
		this.email = email
		this.phone = phone
		this.address = address
        this.password = password
		this.role = role
	}
}

module.exports = { FoodsEntity }