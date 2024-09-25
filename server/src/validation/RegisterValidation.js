const { body } = require("express-validator");

const UserSignupValidations = [
	body("name").notEmpty().withMessage("name is required"),
	body("email")
		.notEmpty()
		.withMessage("email is required")
		.isEmail()
		.withMessage("invalid email format"),
	body("password")
		.notEmpty()
		.withMessage("passowrd is required")
		.isLength({ min: 4 })
		.withMessage("password lenth must be tleast 8 characters long"),
];

module.exports = { UserSignupValidations };
