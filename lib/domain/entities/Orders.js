class OrdersEntity {
	constructor({
		id,
        idUser,
        date,
        totalPrice,
        idTypePayment,
        idOrderStatus,
       
	}) {
		this.id = id
        this.idUser = idUser
        this.date = date
		this.totalPrice = totalPrice
        this.idTypePayment = idTypePayment
        this.idOrderStatus = idOrderStatus
	}
}

module.exports = { OrdersEntity }