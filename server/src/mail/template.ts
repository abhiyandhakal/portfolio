// an email template that can be used with Nodemailer to send emails
const mailTemplate = (text: string, title: string) => {
	return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>NodeMailer Email Template</title>
        <style>
          .container {
            width: 100%;
            height: 100%;
						background: radial-gradient(circle at center, #446, #112);
						color: #ddd;
          }
					.email-header {
						background: #0f172aaa;
						color: #0d7;
						text-align: center;
					}
					.email-body {
            padding-left: 15px;
            padding-right: 15px;
						padding-bottom: 7px;
					}
        </style>
      </head>
      <body>
        <div class="container">
					<div class="email-header">
						<h1>${title}</h1>
					</div>
					<div class="email-body">
						<p>${text}</p>
					</div>
        </div>
      </body>
    </html>
  `;
};

/*
	 USAGE EXAMPLE

	const message = `
	this is testing message

	<div>
	good luck!
	</div>
	`;

	const options = {
		from: `${process.env.MAIL_NAME} <${process.env.MAIL_USER}>`,
		to: "<receiver>@gmail.com",
		subject: "TESTING",
		text: message,
		html: mailTemplate(message)
	};

	sendMail(options, (info) => {
		console.log("Email Sent successfully\nMessage ID: ", info.messageId);
	});
*/

export default mailTemplate;
