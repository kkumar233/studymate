import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  register,
  login,
  getMe,
  logout,
  adminLogin
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/admin/login', adminLogin);
router.get('/me', protect, getMe);
router.get('/logout', protect, logout);

export default router; 