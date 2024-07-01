const sendContactMail = require("../helpers/sendEmail");


const ContactController = {
    post: async (req, res) => {
        try {
            const {
                Email,
                Message,
                Subject
            } = req.body
            sendContactMail(Email, Subject, Message)
            res.status(200).send({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }
}

module.exports = ContactController;