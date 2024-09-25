const { validationResult } = require("express-validator");
const { UserSignupValidations } = require("../validation/RegisterValidation");
const Users = require("../database/models/Users");
const bycrptjs = require("bcryptjs");

const Login = async (UserSignupValidations, request, response) => {
	//validate

	try {
		const users = Users.findOne();
		const user = users.find((user) => user.email === request.body.email);
		if (user.password === request.body.password) {
		}
	} catch (error) {}
};
