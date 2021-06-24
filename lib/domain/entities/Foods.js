class FoodsEntity {
	constructor({
		id,
        name,
        price,
        description,
        id_type_food,
	}) {
		this.id = id
		this.name = name
		this.price = price
		this.description = description
		this.id_type_food = id_type_food
	}
}

module.exports = { FoodsEntity }