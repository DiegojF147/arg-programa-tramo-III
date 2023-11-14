const nodemailer = require("nodemailer");

const EmailController = {};

const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "postmaster@sandbox94f8aabf387e4b60b2893b6543906ac3.mailgun.org",
    pass: "317996b015b9b9e0bafc132fabc53186-8c9e82ec-ff1c0ff8",
  },
});

EmailController.enviarEmail = async (req, res) => {
  const info = await transporter.sendMail({
    from: '"Equipo de Argentina Programa 👻" <argentina@programa.com.ar>', // sender address
    to: "diegojf38@gmail.com", // list of receivers
    subject: "Bienvenido", // Subject line
    text: "Bienvenido Diego.", // plain text body
    html: "<b>Bienvenido a Argentina Programa</b>", // html body
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  return res.json({ mensaje: "Ingresó correctamente" });
};

module.exports = EmailController;
