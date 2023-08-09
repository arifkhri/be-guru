import nodemailer from 'nodemailer';

import config from '../config/default';

export default {
  send: async (options) => {
    console.log("🚀 ~ file: nodemailer.js ~ line 4 ~ config", config)

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: config.nodemailer.user, // generated ethereal user
        pass: config.nodemailer.pass, // generated ethereal password
      },
    });

    const defaultOptions = {
      from: '"Admin Clodeo" <admin@example.com>', // sender address
    }

    const { from = defaultOptions.from, ...restOptions } = options;
    return transporter.sendMail({ from, ...restOptions }).catch((err) => console.log("Error Send Mail", err));
  }
}

