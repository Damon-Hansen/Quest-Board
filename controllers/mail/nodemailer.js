const router = require('express').Router();
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: 'ku.quest.board@gmail.com',
    pass: 'password135',
  },
  secure: true,
});

router.post('/text-mail', (req, res) => {
  const to = req.body.email;
  console.log(to);
  const mailData = {
    from: 'noreply@gameboard.example.com',
    to: to,
    subject: 'Your post has a new comment!',
    text: 'Your comment on Quest-Board has a new comment!',
    html: '<b>Hey There! </b><br> Your post on Quest-Board has a new comment!  Visit our site to check it out!',
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.status(200).send({ message: 'Mail send', message_id: info.messageId });
  });
});

module.exports = router;
