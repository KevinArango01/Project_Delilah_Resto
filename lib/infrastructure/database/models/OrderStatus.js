const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../../infrastructure/database/Conexion')

const OrderStatus = sequelize.define(
	'OrderStatus',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: true,
			field: 'id_order_status',
		},
        name: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'name',
		},
	},
	{
		sequelize,
		tableName: 'tbl_order_status',
		timestamps: false,
	}
)

module.exports = { OrderStatus }