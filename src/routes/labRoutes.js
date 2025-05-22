const express = require('express');
const router = express.Router();
const labController = require('../controllers/labController');
const { isAuthenticated } = require('../middlewares/authMiddleware');


router.get('/', isAuthenticated, labController.getLabRequests);
router.get('/results', isAuthenticated, labController.getLabResults);
router.post('/result', isAuthenticated, labController.createLabResult);


module.exports = router;