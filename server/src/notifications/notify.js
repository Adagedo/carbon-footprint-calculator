const { createTransport } = require("nodemailer");

const transporter = createTransport({
	host: "",
	port: 3000,
	secure: false,
	auth: {
		user: "",
		pass: "",
	},
});

async function main() {
	try {
		const info = transporter.sendMail({
			from: "adagedo, <adagedo52@me.com>",
			to: "reciever",
			subject: "", // , the main message header,
			text: " the message deliverd",
		});
		console.log("email sent sussefully");
	} catch (error) {
		console.log(error);
	}
}

module.exports = main;
