const express = require('express');
const router = express.Router();
const { getDoctorsCount } = require('../controllers/doctorController.js');
router.get('/count', getDoctorsCount);
module.exports = router;