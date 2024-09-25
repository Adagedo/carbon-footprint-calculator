const nodemailer = require("nodemailer");

function __Mailer__(user_info, access_token_subject, access_token_text) {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			email: "myemail.com",
			passowrd: "mypass123",
		},
	});

	const mailOptions = {
		from: "me",
		to: user_info,
		subject: access_token_subject,
		text: access_token_text,
	};

	transporter.sendMail(mailOptions, (error, response) => {
		if (!error) {
			console.log("send sing mail", error);
		}
		console.log("mail delivred", response);
	});
}

module.exports = __Mailer__;
