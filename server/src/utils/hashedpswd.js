const bcrypt = require("bcryptjs");

function HashedPassword(password) {
	const saltRounds = 10;
	const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(password, salt);
	return hash;
}

module.exports = HashedPassword;
