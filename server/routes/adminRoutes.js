const express = require('express')
const router = express.Router()
const { adminLogin, adminLogout } = require('../controllers/adminAuthController.js')
const adminAuth = require('../middleware/adminAuthMiddleware.js')
router.post('/login', adminLogin)
router.get('/dashboard', adminAuth, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Admin dashboard access granted',
    admin: req.admin 
  })
})
router.post('/logout', adminAuth, adminLogout)
module.exports = router
