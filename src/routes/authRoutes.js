const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Define routes
router.post('/login', authController.login);
router.post('/logout',authController.logout)
router.get('/me', isAuthenticated, authController.getme);
router.post('/change-password', isAuthenticated, authController.changePassword);


// patient registration
router.post('/patient/register', authController.registerPatient);

module.exports = router;
