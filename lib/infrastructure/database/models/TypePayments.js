const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../../infrastructure/database/Conexion')

const TypePayments = sequelize.define(
	'TypePayments',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: true,
			field: 'id_type_payment',
		},
        name: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'name',
		},
	},
	{
		sequelize,
		tableName: 'tbl_type_payments',
		timestamps: false,
	}
)

module.exports = { TypePayments }