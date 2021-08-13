const { Orders } = require('../../infrastructure/database/models/Orders')
const { OrderDetails } = require('../../infrastructure/database/models/OrderDetails')
const { Foods } = require('../../infrastructure/database/models/Foods')
const { OrderStatus } = require('../../infrastructure/database/models/OrderStatus')
const { TypePayments } = require('../../infrastructure/database/models/TypePayments')
const { Users } = require('../../infrastructure/database/models/Users')

module.exports = class {
	constructor() {
		this.model = Orders
		this.model.belongsTo(OrderStatus, {foreignKey: 'id_order_status'})
		this.model.belongsTo(TypePayments, {foreignKey: 'id_type_payment'})
		this.model.belongsTo(Users, {foreignKey: 'id_user'})
		this.model.hasMany(OrderDetails, {foreignKey: 'id_order'})
		OrderDetails.belongsTo(Foods, { foreignKey: 'id_food' })
	}

	createOrder(data){
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

	getAllOrders() {
		return new Promise(async (resolve, reject) => {
			try {
				const orders = await this.model
					.findAll({
						include: [
							{
								model: OrderDetails,
								required: true,
								include: [{
									model: Foods,
									required: true,
								}],
								raw: false,
							},
							{
								model: TypePayments,
								required: true,
							},
							{
								model: OrderStatus,
								required: true,
							},
							{
								model: Users,
								required: true,
							},
						],
						raw: false,
					})
					.then((data) =>
						data.map((item) => ({
							
							id: item.dataValues.id,
							userName: item.dataValues.User.dataValues.name,
							email: item.dataValues.User.dataValues.email,
							address: item.dataValues.User.dataValues.address,
							phone: item.dataValues.User.dataValues.phone,
							date: item.dataValues.date,
							totalPrice:	item.dataValues.totalPrice,
							status: item.dataValues.OrderStatus.dataValues.name,
							typePayment: item.dataValues.TypePayment.dataValues.name,

							orderDetails: item.OrderDetails.map((orderDetail) => ({
									id: orderDetail.dataValues.id,
									quantity: orderDetail.dataValues.quantity,
									foodName: orderDetail.Food.dataValues.name,
									description: orderDetail.Food.dataValues.description,
									price: orderDetail.Food.dataValues.price,

								})),
							}))
						)

					if (!orders)
					resolve({
						id,
						message: 'ORDERS NOT FOUNT',
						status: false,
					})
					resolve({orders})
				} catch(error){
					reject(error)
			}
		})
	}

	updateStatusOrder(id, state){
		return new Promise(async (resolve, reject) => {
			try{
				const result = await this.model.update(state,{
					where: { id },
				})
				if(result){
					resolve({
						id,
						message: 'UPDATE STATUS SUCCESS',
						status: true,
					})
				}
					resolve({
						id,
						message: 'UPDATE ERROR, ORDER NOT FOUNT',
						status: false,
					})
			} catch(error){
				reject(error)
			}
		})
	}

	deleteOrderById(id){
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
						message: 'DELETE ERROR, ORDER NOT FOUNT',
						status: false,
					})
			} catch(error){
				reject(error)
			}
		})
	}
}
