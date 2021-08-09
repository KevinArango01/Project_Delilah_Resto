const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../../infrastructure/database/Conexion')

const OrderDetails = sequelize.define(
	'OrderDetails',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: true,
			field: 'id_order_detail',
		},
        quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'quantity',
		},
        idFood: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'id_food',
		},
        idOrder: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'id_order',
		},
	},
	{
		sequelize,
		tableName: 'tbl_order_details',
		timestamps: false,
	}
)

module.exports = { OrderDetails }