const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: process.env.SMTP_PORT,
    SecureConnection: false,
    auth: {
        type: "login",
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
})

const SendMail = async (email, subject, content) => {
    try {
        var mailoptions = {
            from: process.env.SMTP_MAIL,
            to: email,
            subject: subject,
            html: content
        }
        transporter.sendMail(mailoptions, (error, info) => {
            if (error) {
                console.log(error)
            }
            console.log('mailsend', info.messageId)
        })
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = { SendMail }
