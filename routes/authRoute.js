const express = require('express');
const { createUser, loginUser, getUsers, getUser, deleteUser, updateUser, blockUser, unblockUser, updatePassword, forgotPasswordToken, resetPassword } = require('../controller/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/forgotpassword', forgotPasswordToken);
router.put('/password', authMiddleware, updatePassword);
router.put('/resetpassword/:token', resetPassword);
router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/users', getUsers);
router.get('/:id', authMiddleware, isAdmin, getUser);
router.delete('/:id', deleteUser);
router.put('/:id', authMiddleware, isAdmin, updateUser);
router.put('/block/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock/:id', authMiddleware, isAdmin, unblockUser);

module.exports = router;