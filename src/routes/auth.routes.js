// Authentication Routes
// Define endpoints for signup, login, logout

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Public routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);

// Protected routes
router.post('/logout', authController.logout);
router.get('/verify', authController.verifyToken);

module.exports = router;
