import bcrypt from 'bcrypt';

import User from '../models/user';

export default {
  create: async (req, res) => {
    try {
      const { full_name, email, phone, password } = req.body;
      if (!(full_name || email || phone || password)) {
        res.status(400).send("All input is required");
      }      
      
      const registeredUser = await User.findByEmail({ email }).catch(err => { res.status(500).json([err.sqlMessage]); });
      if (registeredUser.length) {
        res.status(400).send("User Already Exist");
      }
      
      console.log("[CONTROLLER]User ~ create ~ req.body", req.body);
      
      const encryptedPswd = await bcrypt.hash(password, 10);
      const name = full_name.split(' ');

      const user = await User.create([full_name, email, phone, name[0], name[1], encryptedPswd]).catch(err => { res.status(500).json([err.sqlMessage]); });

      console.log("[CONTROLLER]User ~ create ~ data", user);

      if (user) {
        res.status(201).json('Succesfully created user');
      }

    } catch (err) {
      res.status(500).json([err]);
    }
  },
  getAll: async (req, res) => {

    try {
      const keyword = req.query?.keyword || '';
      const limit = Number(req.query?.limit);
      const offset = Number(req.query?.offset);
      console.log("[CONTROLLER]User ~ getAll ~ req.query", req.query);

      const users = await User.getAll({ keyword, limit, offset }).catch(err => {
        res.status(500).json([err.sqlMessage]);
      });
      console.log("[CONTROLLER]User ~ getAll ~ data", users);
      
      const rowTotal = await User.getTotalRows().catch(err => { res.status(500).json([err.sqlMessage]); });
      console.log("[CONTROLLER]User ~ getAll ~ rowTotal", rowTotal);

      res.status(200).json({ data: users, total: rowTotal, offset, limit });

    } catch (err) {
      res.status(500).json([err]);
    }
  },
  getById: async (req, res) => {

    try {
      console.log("[CONTROLLER]User ~ getById ~ req.params", req.params);
      
      const user = await User.getById(Number(req.params.id)).catch(err => { res.status(500).json([err.sqlMessage]); });
      console.log("[CONTROLLER]User ~ getById ~ data", user);

      if (!user) {
        res.status(404).json("User not found");
      }
      res.status(200).json(user);

    } catch (err) {
      res.status(500).json([err]);
    }
  },
  resetPassword: async (req, res) => {

    try {
      const { email, new_password } = req.body;
      console.log("[CONTROLLER]User ~ resetPassword ~ req.body", req.body);
      
      const password = await bcrypt.hash(new_password, 10);

      const user = await User.updatePassword([password, email]);
      console.log("[CONTROLLER]User ~ resetPassword ~ data", user);

      if (user) {
        res.status(200).json('Succesfully updated password');
      }

    } catch (err) {
      res.status(500).json([err]);
    }
  },
  update: async (req, res) => {

    try {
      const { full_name, email, phone } = req.body;
      console.log("[CONTROLLER]User ~ update ~ req.body", req.body);
      
      const name = full_name.split(' ');
      const user = await User.update([full_name, email, phone, name[0], name[1], Number(req.params.id)]).catch(err => { res.status(500).json([err.sqlMessage]); });
      console.log("[CONTROLLER]User ~ update ~ data", user);

      if (user) {
        res.status(200).json('Succesfully updated user');
      }

    } catch (err) {
      res.status(500).json([err]);
    }
  },
  delete: async (req, res) => {

    try {
      console.log("[CONTROLLER]User ~ delete ~ req.params", req.params);
      
      const user = await User.delete(Number(req.params.id)).catch(err => { res.status(500).json([err.sqlMessage]); });
      console.log("[CONTROLLER]User ~ delete ~ data", user);

      if (user) {
        res.status(200).json('Succesfully deleted user');
      }

    } catch (err) {
      res.status(500).json([err]);
    }
  },
  updateStatus: async (req, res) => {

    try {
      const { is_active } = req.body;
      console.log("[CONTROLLER]User ~ updateStatus ~ req.body", req.body);
      
      const user = await User.updateStatus([is_active, Number(req.params.id)]).catch(err => { res.status(500).json([err.sqlMessage]); });
      console.log("[CONTROLLER]User ~ updateStatus ~ data", user);

      if (user) {
        res.status(200).json(`Succesfully ${is_active ? 'Active' : 'Inactive'} user`);
      }

    } catch (err) {
      res.status(500).json([err]);
    }
  },
  updatePassword: async (req, res) => {

    try {
      const { new_password } = req.body;
      console.log("[CONTROLLER]User ~ updatePassword ~ req.body", req.body);
      
      const password = await bcrypt.hash(new_password, 10);
      const user = await User.updatePassword([password, Number(req.params.id)]).catch(err => { res.status(500).json([err.sqlMessage]); });
      console.log("[CONTROLLER]User ~ updatePassword ~ data", user);

      if (user) {
        res.status(200).json(`Succesfully updated password user`);
      }

    } catch (err) {
      res.status(500).json([err]);
    }
  }
}