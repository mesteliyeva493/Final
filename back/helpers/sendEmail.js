const nodemailer = require('nodemailer');

async function sendContactMail(email, subject, content) {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL__USERNAME,
            pass: process.env.EMAIL__PASSWORD,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL__USERNAME,
        subject: 'New Contact Form Submission',
        html: `
        <p>${email}</p>
        <p>${subject}</p>
        <p>${content}</p>
        `

    };

    await transporter.sendMail(mailOptions);



}

module.exports = sendContactMail