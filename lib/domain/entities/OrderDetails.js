class OrderDetailsEntity {
	constructor({
		id,
        quantity,
        idFood,
        idOrder,
       
	}) {
		this.id = id
		this.quantity = quantity
        this.idFood = idFood
        this.idOrder = idOrder
	}
}

module.exports = { OrderDetailsEntity }