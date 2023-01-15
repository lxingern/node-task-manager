const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lxingern@gmail.com',
        subject: 'Thanks for joining us!',
        text: `Welcome to the app, ${name}. Let us know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lxingern@gmail.com',
        subject: "We're sorry to see you go.",
        text: `What could we have done better, ${name}?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}