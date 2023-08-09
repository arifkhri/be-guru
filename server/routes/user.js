import express from 'express';

import authMiddleware from '../middlewares/auth';
import userCtrl from '../controllers/user';

const router = express.Router();

/**
  * @swagger
  * /api/v1/user:
  *   get:
  *     tags:
  *     - User
  *     summary: Get users.
  *     parameters:
  *       - in: query
  *         name: limit
  *         schema:
  *           type: string
  *           required: true
  *       - in: query
  *         name: offset
  *         schema:
  *           type: string
  *           required: true
  *       - in: query
  *         name: keyword
  *         schema:
  *           type: string
  *     responses:
  *       500:
  *         description: Server error
  *       200:
  *         description: Get User List
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 total:
  *                    type: integer
  *                 limit:
  *                    type: integer
  *                 page:
  *                    type: integer
  *                 data:
  *                    type: array
  *                    items:
  *                        type: object
  *                        properties:
  *                          id:
  *                            type: integer
  *                          full_name:
  *                            type: string
  *                          first_name:
  *                            type: string
  *                          last_name:
  *                            type: string
  *                          email:
  *                            type: string
  *                          phone:
  *                            type: string
  *                          is_active:
  *                            type: boolean
  *                          picture_url:
  *                            type: string
*/
router.get('/', authMiddleware, userCtrl.getAll);

/**
  * @swagger
  * /api/v1/user/{id}:
  *   get:
  *     tags:
  *     - User
  *     summary: Get user.
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *           required: true
  *     responses:
  *       500:
  *         description: Server error
  *       200:
  *         description: Get User
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 id:
  *                   type: integer
  *                 full_name:
  *                   type: string
  *                 first_name:
  *                   type: string
  *                 last_name:
  *                   type: string
  *                 email:
  *                   type: string
  *                 phone:
  *                   type: string
  *                 is_active:
  *                   type: boolean
  *                 picture_url:
  *                   type: string
*/
router.get('/:id', authMiddleware, userCtrl.getById)

/**
  * @swagger
  * /api/v1/user:
  *   post:
  *     tags: 
  *      - User
  *     summary: Create a user.
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *          schema:
  *           type: object
  *           properties:
  *            full_name:
  *              type: string
  *            email:
  *              type: string
  *            phone:
  *              type: string
  *            password:
  *              type: string
  *     responses:
  *       500:
  *         description: Server error
  *       201:
  *         description: Created
  *         content:
  *           application/json:
  *             schema:
  *               type: string
  *               example: Succesfully created user
*/
router.post('/', authMiddleware, userCtrl.create);

/**
  * @swagger
  * /api/v1/user/{id}:
  *   put:
  *     tags: 
  *      - User
  *     summary: Update a user.
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *           required: true
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *          schema:
  *           type: object
  *           properties:
  *            full_name:
  *              type: string
  *            email:
  *              type: string
  *            phone:
  *              type: string
  *     responses:
  *       500:
  *         description: Server error
  *       200:
  *         description: Updated
  *         content:
  *           application/json:
  *             schema:
  *               type: string
  *               example: Succesfully updated user
*/
router.put('/:id', authMiddleware, userCtrl.update);

/**
  * @swagger
  * /api/v1/user/{id}/active:
  *   put:
  *     tags: 
  *      - User
  *     summary: Update status a user.
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *           required: true
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *          schema:
  *           type: object
  *           properties:
  *            is_active:
  *              type: boolean
  *     responses:
  *       500:
  *         description: Server error
  *       200:
  *         description: Updated status user
  *         content:
  *           application/json:
  *             schema:
  *               type: string
  *               example: Succesfully change status user
*/
router.put('/:id/active', authMiddleware, userCtrl.updateStatus);

/**
  * @swagger
  * /api/v1/user/{id}/password:
  *   put:
  *     tags: 
  *      - User
  *     summary: Update password user.
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *           required: true
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *          schema:
  *           type: object
  *           properties:
  *            new_password:
  *              type: string
  *     responses:
  *       500:
  *         description: Server error
  *       200:
  *         description: Updated status user
  *         content:
  *           application/json:
  *             schema:
  *               type: string
  *               example: Succesfully updated password user
*/
router.put('/:id/password', userCtrl.updatePassword);

/**
  * @swagger
  * /api/v1/user/{id}:
  *   delete:
  *     tags: 
  *      - User
  *     summary: delete a user
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *           required: true
  *     responses:
  *       500:
  *         description: Server error
  *       200:
  *         description: Updated status user
  *         content:
  *           application/json:
  *             schema:
  *               type: string
  *               example: Succesfully deleted user
*/
router.delete('/:id', authMiddleware, userCtrl.delete);

module.exports = router;
