const express = require('express');
const router = express.Router();
const pharmacistController = require('../controllers/pharmacistController');
const { isAuthenticated , isPharmacist} = require('../middlewares/authMiddleware');


router.get('/prescriptions', isAuthenticated, isPharmacist, pharmacistController.getPrescriptions);
router.post('/dispense', isAuthenticated, isPharmacist, pharmacistController.dispenseMedication);
// router.post('/dispense/:id', isAuthenticated, isPharmacist, pharmacistController.Dispense);
router.get('/dispenses', isAuthenticated, isPharmacist, pharmacistController.getDispenses);

module.exports = router;