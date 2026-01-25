const jwt = require('jsonwebtoken')
const { blacklistedTokens } = require('../controllers/adminAuthController')
const adminAuthMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access denied'
      })
    }
    const token = authHeader.split(' ')[1]
    if (blacklistedTokens.has(token)) {
      return res.status(401).json({
        success: false,
        message: 'Session expired'
      })
    }
    const decoded = jwt.verify(token, process.env.ADMIN_JWT_SECRET)
    if (decoded.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Forbidden'
      })
    }
    req.admin = decoded
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token'
    })
  }
}
module.exports = adminAuthMiddleware
