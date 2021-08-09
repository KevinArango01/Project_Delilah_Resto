const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../../../infrastructure/database/Conexion')

const Users = sequelize.define(
	'Users',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			field: 'id_user',
		},
        username: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'username',
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'name',
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'email',
		},
		phone: {
			type: DataTypes.STRING(15),
			allowNull: false,
			field: 'phone',
		},
        address: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'address',
		},
        password: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'password',
		},
		role: {
			type: DataTypes.INTEGER,
            references: 'tbl_reles',
            referencesKey: 'id_role',
			allowNull: false,
			field: 'id_role',
		},
	},
	{
		sequelize,
		tableName: 'tbl_user',
		timestamps: false,
	}
)

module.exports = { Users }
