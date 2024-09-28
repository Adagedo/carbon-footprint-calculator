const { validationResult } = require("express-validator");
const Users = require("../database/models/Users");
const bcrypt = require("bcryptjs");
const __Mailer__ = require("../notifications/notifyOauth");
const AuthsCode = require("../utils/AuthsToken");
const HashedPassword = require("../utils/hashedpswd");

const RegisterContoller = async (request, response) => {
	const { name, email, password } = request.body;
	console.log({ name, email, password });
	try {
		const _HashedPassword = HashedPassword(password);
		const Code = AuthsCode();
		//hash hte password be saving to the databse
		__Mailer__(email, "Your Access Code", Code);
		console.log(_HashedPassword);
		await Users.create({ name, email, password: _HashedPassword });
		response.send("register successfull");
	} catch (error) {
		//send error resposnse
		response.status(404).send(error);
		console.log(error);
	}

	//
};
/* bcrypt.compareSync("B4c0/\/", hash); // true
bcrypt.compareSync("not_bacon", hash); /*/

module.exports = RegisterContoller;
