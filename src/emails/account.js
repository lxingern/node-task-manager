const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

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