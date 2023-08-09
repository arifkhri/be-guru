import config from "../../config/default";
import nodemailer from "../nodemailer";
import forgotPassword from "./template/forgot-password";
import reminder from "./template/reminder";

const url = config.FEURL;
export default {
  sendForgotPass: (options) => {
    const { to, token, ...restOptions } = options;
    const link = `${url}/reset-password?token=${token}&email=${to}`;
    const optDefault = {
      to, // list of receivers
      subject: "[Forgot Password] - " + to, // Subject line
      html: forgotPassword.generate({link}), // html body
      ...restOptions
    }
    return nodemailer.send(optDefault);
  }, 
  sendReminder: (options) => {
    const { to, reminder_date, agenda, ...restOptions } = options;
    const optDefault = {
      to, // list of receivers
      subject: "[Reminder]", // Subject line
      html: reminder.generate({reminder_date, agenda}), // html body
      ...restOptions
    }
    return nodemailer.send(optDefault);
  }
}