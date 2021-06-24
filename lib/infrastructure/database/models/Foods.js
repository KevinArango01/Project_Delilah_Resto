const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../../infrastructure/database/Conexion')

const Foods = sequelize.define(
	'Foods',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			field: 'id_food',
		},
		name: {
			type: DataTypes.STRING(60),
			allowNull: false,
			field: 'name',
		},
		price: {
			type: DataTypes.DOUBLE,
			field: 'price',
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'description',
		},
		typeFood: {
			type: DataTypes.INTEGER,
            references: 'tbl_type_foods',
            referencesKey: 'id_type_food',
			allowNull: false,
			field: 'id_type_food',
		},
	},
	{
		sequelize,
		tableName: 'tbl_foods',
		timestamps: false,
	}
)

module.exports = { Foods }
