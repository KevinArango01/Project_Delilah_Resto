class FoodsEntity {
	constructor({
		id,
        name,
        price,
        description,
        typeFood,
	}) {
		this.id = id
		this.name = name
		this.price = price
		this.description = description
		this.typeFood = typeFood
	}
}

module.exports = { FoodsEntity }