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

    deleteOrderById(id){
        return this.repository.deleteOrderById(id)
    }
}

module.exports = { OrdersRepository }