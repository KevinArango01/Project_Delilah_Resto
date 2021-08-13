const { OrderDetails } = require('../../infrastructure/database/models/OrderDetails')
const { Foods } = require('../../infrastructure/database/models/Foods')

module.exports = class {
	constructor() {
		this.model = OrderDetails
        this.model.belongsTo(Foods, { foreignKey: 'id_food' })
	}

	addDetail(data){
		return new Promise(async (resolve, reject) => {
			try{
				const result = await this.model.create(data)
				if(result){
					resolve({
						data: result,
						message: 'INSERT SUCCESS'
					})
				}
			} catch(error){
				reject(error)
			}
		})
	}

	getAllDetailsByIdOrder(id) {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await this.model.findAll({
					where: {idOrder: id},
                    include: 
                        {
                            model: Foods,
                            require: true,
                        }
                })
				if (!result.length) {
					resolve({})
				}
				resolve(result)
			} catch (error) {
				reject(error)
			}
		})
	}

	updateDetail(id, data){
		return new Promise(async (resolve, reject) => {
			try{
				const result = await this.model.update(data,{
					where: { id },
				})
				if(result){
					resolve({
						id,
						message: 'UPDATE SUCCESS',
						status: true,
					})
				}
					resolve({
						id,
						message: 'UPDATE ERROR, ORDER DETAIL NOT FOUNT',
						status: false,
					})
			} catch(error){
				reject(error)
			}
		})
	}

	updateDetailByIdOrder(id, data){
		return new Promise(async (resolve, reject) => {
			try{
				const result = await this.model.update({idOrder: data},{
					where: { idOrder: id },
				})
				if(result){
					resolve({
						id,
						message: 'UPDATE SUCCESS',
						status: true,
					})
				}
					resolve({
						id,
						message: 'UPDATE ERROR, ORDER DETAIL NOT FOUNT',
						status: false,
					})
			} catch(error){
				reject(error)
			}
		})
	}

	deleteDetail(id){
		return new Promise(async (resolve, reject) => {
			try{
				const result = await this.model.destroy({
					where: { id },
				})
				if(result){
					resolve({
						id,
						message: 'DELETE SUCCESS',
						status: true,
					})
				}
					resolve({
						id,
						message: 'DELETE ERROR, ORDER DETAIL NOT FOUNT',
						status: false,
					})
			} catch(error){
				reject(error)
			}
		})
	}

	deleteDetailByIdOrder(id){
		return new Promise(async (resolve, reject) => {
			try{
				const result = await this.model.destroy({
					where: { idOrder: id },
				})
				if(result){
					resolve({
						id,
						message: 'DELETE SUCCESS',
						status: true,
					})
				}
					resolve({
						id,
						message: 'DELETE ERROR, ORDER DETAIL NOT FOUNT',
						status: false,
					})
			} catch(error){
				reject(error)
			}
		})
	}
}
