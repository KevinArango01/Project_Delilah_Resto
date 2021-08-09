const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../../infrastructure/database/Conexion')

const Orders = sequelize.define(
	'Orders',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: true,
			field: 'id_order',
		},
        idUser: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'id_user',
		},
        date: {
            type: DataTypes.DATE,
            allowNull: false,
			field: 'date',
        },
        totalPrice: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'total_price',
		},
        idTypePayment: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'id_type_payment',
		},
        idOrderStatus: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'id_order_status',
		},
	},
	{
		sequelize,
		tableName: 'tbl_orders',
		timestamps: false,
	}
)

module.exports = { Orders }