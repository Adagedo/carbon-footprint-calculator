const UserSignupValidations = require("../validation/RegisterValidation");
const express = require("express");
const RegisterContoller = require("../controllers/Register");
const router = express.Router();
const AuthenticationController = require("../controllers/authentication");
router.post("/register", RegisterContoller);
router.post("/verify-token", AuthenticationController);

module.exports = router;
