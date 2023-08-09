import express from 'express';

import authCtrl from '../controllers/auth';

const router = express.Router();

/**
  * @swagger
  * /api/login:
  *   post:
  *     tags: 
  *      - Auth
  *     summary: login.
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *          schema:
  *           type: object
  *           properties:
  *            email:
  *              type: string
  *            password:
  *              type: string
  *     responses:
  *       500:
  *         description: Server error
  *       400:
  *         description: Email and password is required
  *       401:
  *         description: Invalid credential s
  *       200:
  *         description: Logged in
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 email:
  *                   type: string
  *                 access_token:
  *                   type: string
  *                 id:
  *                   type: string
  *                 full_name:
  *                   type: string
  *                 first_name:
  *                   type: string
  *                 last_name:
  *                   type: string
  *                 phone:
  *                   type: string
*/
router.post('/login', authCtrl.login);


/**
  * @swagger
  * /api/user-by-token:
  *   post:
  *     tags: 
  *      - Auth
  *     summary: User Data by Token.
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *          schema:
  *           type: object
  *           properties:
  *            token:
  *              type: string
  *     responses:
  *       500:
  *         description: Server error
  *       200:
  *         description: Logged in
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 email:
  *                   type: string
  *                 access_token:
  *                   type: string
  *                 id:
  *                   type: string
  *                 full_name:
  *                   type: string
  *                 first_name:
  *                   type: string
  *                 last_name:
  *                   type: string
  *                 phone:
  *                   type: string
*/
router.post('/user-by-token', authCtrl.getUserByToken);

/**
  * @swagger
  * /api/forgot-password:
  *   post:
  *     tags: 
  *      - Auth
  *     summary: Request Forgot password.
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *          schema:
  *           type: object
  *           properties:
  *            email:
  *             type: string
  *     responses:
  *       500:
  *         description: Server error
  *       400:
  *         description: Email is required
  *       404:
  *         description: Email is not unregistered
  *       200:
  *         description: Sent Email
  *         content:
  *           application/json:
  *             schema:
  *               type: string
  *               example: Succesfully send email forgot password
*/
router.post('/forgot-password', authCtrl.forgotPassword);

/**
  * @swagger
  * /api/reset-password:
  *   post:
  *     tags: 
  *     - Auth
  *     summary: Reset password user.
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *          schema:
  *           type: object
  *           properties:
  *            token:
  *             type: string
  *            new_password:
  *             type: string
  *     responses:
  *       500:
  *         description: Server error
  *       401:
  *         description: Invalid Token
  *       200:
  *         description: Updated
  *         content:
  *           application/json:
  *             schema:
  *               type: string
  *               example: Succesfully reset password
*/
router.post('/reset-password', authCtrl.resetPassword);

module.exports = router;
