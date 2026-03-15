const express = require('express');
const router = express.Router();
const Doctor = require('../models/DoctorModel.js');
router.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);   
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch doctors',
      error: error.message
    });
  }
});
module.exports = router;
