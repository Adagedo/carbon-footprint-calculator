const nodemailer = require("nodemailer");

function __Mailer__(user_info, access_token_subject, access_token_text) {
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: "adagedosolomon52@gmail.com",
			passowrd: "Adagedo@#$%1234",
		},
	});

	const mailOptions = {
		from: "adagedosolomon52@gmail.com",
		to: user_info,
		subject: access_token_subject,
		text: access_token_text,
	};

	transporter.sendMail(mailOptions, (error, response) => {
		if (!error) {
			console.log("Error sending mail", error);
		}
		console.log("mail delivered successfully", response);
	});
}

module.exports = __Mailer__;
