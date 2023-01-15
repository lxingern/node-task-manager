const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'lxingern@gmail.com',
    from: 'lxingern@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually gets to you.'
})