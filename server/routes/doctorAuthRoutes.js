const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadDoctorFiles.js');
const { registerDoctor, loginDoctor } = require('../controllers/doctorAuthController.js');
router.post(
  '/register',
  upload.fields([
    { name: 'cv', maxCount: 1 },
    { name: 'image', maxCount: 1 }
  ]),
  registerDoctor
);
router.post('/login', loginDoctor);
module.exports = router;
