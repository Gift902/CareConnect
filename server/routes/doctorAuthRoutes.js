const express = require('express');
const router = express.Router();
const uploadCV = require('../middleware/uploadCV.js');
const { registerDoctor, loginDoctor } = require('../controllers/doctorAuthController.js');
router.post('/register', uploadCV.single('cv'), registerDoctor);
router.post('/login', loginDoctor);
module.exports = router;