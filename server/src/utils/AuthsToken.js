const { Model } = require("sequelize");

function Access_code() {
	return (token = Math.floor(Math.random() * 5));
}
module.exports = Access_code;
