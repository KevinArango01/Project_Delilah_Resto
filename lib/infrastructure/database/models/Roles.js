const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../../infrastructure/database/Conexion')

const Roles = sequelize.define(
	'Roles',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			field: 'id_roles',
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'name',
		},
	},
	{
		sequelize,
		tableName: 'tbl_roles',
		timestamps: false,
	}
)

module.exports = { Roles }