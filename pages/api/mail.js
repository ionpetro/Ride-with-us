import formData from 'form-data';
import Mailgun from 'mailgun.js';

export default function handler(req, res) {
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAIL_KEY,
  });
  mg.messages
    .create('sandbox7e3fc51a60164d21813d6a16cfe27ba2.mailgun.org', {
      from: 'ionpetro@gmail.com',
      to: ['ridewithus2023@gmail.com'],
      subject: req.body.title,
      text: JSON.stringify(req.body, null, 2),
    })
    .then((msg) => res.status(200).json({ msg })) // logs response data
    .catch((err) => console.log(err)); // logs any error`;
}
