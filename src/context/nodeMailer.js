import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // `true` for port 465, `false` for all other ports
    auth: {
        user: 'madge.mcdermott@ethereal.email',
        pass: 'C9jAemYu7jnJ7qKwmM'
    }
  });
  async function mailerFunction() {
    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <madge.mcdermott@ethereal.email>', // sender address
        to: "ibrahimrefaeei@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      console.log(info)
    }

    export default mailerFunction
      

  