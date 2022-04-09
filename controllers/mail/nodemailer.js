const router = require('express').Router();
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.ethereal.email",
        auth: {
            user: 'bettie.boehm26@ethereal.email',
            pass: 'jUmBesznqZrFxh26Ys',
        },
    secure: false,
});

router.post('/text-mail', (req, res) => {
    const {to, subject, text} = req.body;
    const mailData = {
        from: 'noreply@gameboard.example.com',
        to: to,
        subject: subject,
        text: text,
        html: '<b>Hey There! </b><br> This is our first message '
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});

module.exports = router;