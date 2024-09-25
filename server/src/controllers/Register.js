const { validationResult } = require("express-validator");
const { UserSignupValidations } = require("../validation/RegisterValidation");
const Users = require("../database/models/Users");
const bcrypt = require("bcryptjs");
const __Mailer__ = require("../notifications/notifyOauth");
const Access_code = require("../utils/AuthsToken");

const Register = async (UserSignupValidations, request, response) => {
	const { name, email, password } = request.body;
	const error = validationResult(request);
	if (error.isEmpty()) {
		response.status(400).send({ error: error.array() });
	}
	try {
		const token = Access_code();
		//hash hte password be saving to the databse
		__Mailer__(email, "Your Access Code", token);
		await Users.create({ name, email, password, token });
		response.send("register successfull");
	} catch (error) {
		//send error resposnse
		console.log(error);
	}

	//
};

module.exports = Register;
