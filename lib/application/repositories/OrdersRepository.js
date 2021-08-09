class OrdersRepository {
	constructor(repository) {
		this.repository = repository
	}

    createOrder(data) {
        return this.repository.createOrder(data)
    }

    getAllOrders() {
        return this.repository.getAllOrders()
    }

    updateStatusOrder(id, state){
        return this.repository.updateStatusOrder(id, state)
    }
}

module.exports = { OrdersRepository }