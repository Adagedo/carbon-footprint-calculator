const __Mailer__ = require("../notifications/notifyOauth");
const Users = require("../database/models/Users");

async function AuthenticationController(request, response) {
	const { token_ } = request.body;
	const users = await Users.findAll();
	const user_token = users.find((user) => user.token === token_);
	if (!user_token) {
		response.status(404).send({ msg: "invalid access code" });
	}
	response.send("code confirmed");
}

module.exports = AuthenticationController;
