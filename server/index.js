const express = require("express");
const dotenv = require("dotenv");
const db = require("./src/database/db");
dotenv.config();
const Users = require("./src/database/models/Users");
const sequelize = require("./src/database/db");

const app = express();

const port = process.env.PORT;

async function sync() {
	try {
		await sequelize.sync({ force: false });
		console.log("Database tables created sucessfully");
	} catch (error) {
		console.log("error creating table", error);
	}
}
sync();
app.listen(port, () => {
	console.log(`server running on port ${port}`);
});
