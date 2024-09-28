const express = require("express");
const dotenv = require("dotenv");
const db = require("./src/database/db");
dotenv.config();
const Users = require("./src/database/models/Users");
const sequelize = require("./src/database/db");
const router = require("./src/routes/Register");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

const corsOptions = {
	origin: "http://localhost:5173", // Your client's domain
	credentials: true, // Allow credentials (cookies) to be sent
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/", (request, response) => {
	response.send("server running");
});

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
