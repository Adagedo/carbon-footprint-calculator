const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	"carbon-foot-print",
	"root",
	"adagedo@#$%1234",
	{
		host: "localhost",
		dialect: "mysql",
	}
);
async function Auth() {
	try {
		await sequelize.authenticate();
		console.log("connected to database");
	} catch (error) {
		console.log("can't connect to database:", error);
	}
}

Auth();

module.exports = sequelize;
