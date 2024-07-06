const nodemailer = require("nodemailer");
const cron = require("node-cron");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    }
});

const emailWithNodeMailer = async () => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USERNAME, // sender address
            to: "", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        console.log('message send in email' + info.response);
    } catch (error) {
        console.log('error message is '+error);
        throw error;
    }
}

const emailSendingAllSystem = async (email, subject, text) => {
    // console.log(email+" "+subject+" "+text)
    if(!email){
        return;
    }
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USERNAME,
            to: email,
            subject: subject,
            text: text,
            html: `<p>${text}</p>`,
        });

        // console.log('Email sent:', info.response);
        return info;
    } catch (error) {
        console.error('Error sending email:', error.message);
        throw error;
    }
};

const emailSendWithFileSystem = async (email, subject, text, filePath) => {
    if (!email) {
        return;
    }
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USERNAME,
            to: email,
            subject: subject,
            text: text,
            html: `<p>${text}</p>`,
            attachments: [
                {
                    filename: 'payment_information.xlsx',
                    path: filePath
                }
            ]
        });

        console.log('Email sent:', info.response);
        return info;
    } catch (error) {
        console.error('Error sending email:', error.message);
        throw error;
    }
};


cron.schedule("53 15 * * *", async () => {
    try {
        const result = await emailSendingAllSystem(
            "j8.380@gmail.com",
            "Daily Report",
            "This is your daily report."
        );
        // console.log("Email sent successfully:", result);
    } catch (error) {
        console.error("Error sending email:", error);
    }
});


// emailSendingAllSystem("mdraselislam1944@gmail.com","test","hello world rasel for test mail last version");


module.exports = { emailWithNodeMailer, emailSendingAllSystem,emailSendWithFileSystem};

