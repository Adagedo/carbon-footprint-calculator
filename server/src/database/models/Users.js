const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Users = sequelize.define("users", {
	_users_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	email: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	password: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
});

module.exports = Users;
