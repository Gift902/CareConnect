const express = require('express');
const router = express.Router();
const { getUsersCount } = require('../controllers/adminUsers.js');
router.get('/counts', getUsersCount);
module.exports = router;