import bcrypt from 'bcrypt';

import jwt from '../core/jwt';
import mail from '../core/mail';
import User from '../models/user';

export default {
  login: async (req, res) => {
    try {
      const { email, password, remember } = req.body;
      if (!(email && password)) {
        res.status(400).json('Email and Password is required');
      }

      const user = await User.findByEmail({ email }, true);

      if (user.length && (await bcrypt.compare(password, user[0].password))) {
        const token = jwt.generate({ user_id: user[0].id, email }, remember && '1w');
        res.status(200).json({
          email,
          access_token: token,
          id: user[0].id,
          full_name: user[0].full_name,
          first_name: user[0].first_name,
          last_name: user[0].last_name,
          phone: user[0].phone,
        });
      }

      res.status(401).json('Invalid Credentials');

    } catch (err) {
      res.status(500).json([err]);
    }
  },

  getUserByToken: async (req, res) => {
    try {
      const { token } = req.body;
      const userData = await jwt.verify(token);

      if (userData) {
        const user = await User.findByEmail({ email: userData.email });
        console.log("🚀 ~ file: auth.js ~ line 44 ~ getUserByToken: ~ user", user)
        res.status(200).json({
          email: userData.email,
          access_token: token,
          id: user[0].id,
          full_name: user[0].full_name,
          first_name: user[0].first_name,
          last_name: user[0].last_name,
          phone: user[0].phone,
        });
      }

      res.status(401).json('Invalid Token');

    } catch (err) {
      res.status(500).json([err]);
    }
  },

  forgotPassword: async (req, res) => {

    try {
      const { email } = req.body;
      if (!(email)) {
        res.status(400).send("Email is required");
      }

      const user = await User.findByEmail({ email });
      console.log("🚀 ~ file: auth.js ~ line 72 ~ forgotPassword: ~ user", user)

      if (!user.length) {
        res.status(404).send("Email is not registered");
      }

      mail.sendForgotPass({ to: email, token: jwt.generate({ email }) }).then(() => {
        res.status(200).json('Succesfully send email forgot password');

      }).catch((err) => {
        res.status(500).json([err]);

      });

    } catch (err) {
      res.status(500).json([err]);
    }
  },

  resetPassword: async (req, res) => {

    try {
      const { token, password, email } = req.body;
      const userData = jwt.verify(token);

      if (!userData) {
        res.status(401).json("Invalid token");
      }

      const bcryptPassword = await bcrypt.hash(password, 10);
      const user = await User.updatePasswordByEmail([bcryptPassword, email]);

      if (user) {
        res.status(200).json('Succesfully reset password');
      }

    } catch (err) {
      res.status(500).json([err]);
    }
  }
}