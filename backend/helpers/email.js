import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });


  // Información del email

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptasks.com>',
    to: email,
    subject: "UpTask - Confirma tu cuenta",
    text: "Confirma tu cuenta en UpTask",
    html: `<p> Hola: ${nombre} Confirma tu cuenta en UpTask</p>
    <p> Tu cuenta esta ya casi lista, solo debes comprobarla en el siguiente enlace: </p>
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a>

        <p> Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
       

    `
  })
};
