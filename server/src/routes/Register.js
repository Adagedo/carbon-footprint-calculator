const { validationResult } = require("express-validator");
const { UserSignupValidations } = require("../validation/RegisterValidation");
const express = require("express");

const router = express.Router();

router.post("/register", UserSignupValidations, controllers);
