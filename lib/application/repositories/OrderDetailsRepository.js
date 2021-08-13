class OrderDetailsRepository {
	constructor(repository) {
		this.repository = repository
	}

    getAllDetailsByIdOrder(id) {
		return this.repository.getAllDetailsByIdOrder(id)
	}

    addDetail(data) {
        return this.repository.addDetail(data)
    }

    updateDetail(id, data) {
        return this.repository.updateDetail(id,data)
    }

    updateDetailByIdOrder(id, data) {
        return this.repository.updateDetailByIdOrder(id, data)
    }
    
    deleteDetail(id){
        return this.repository.deleteDetail(id)
    }

    deleteDetailByIdOrder(id){
        return this.repository.deleteDetailByIdOrder(id)
    }
}

module.exports = { OrderDetailsRepository }