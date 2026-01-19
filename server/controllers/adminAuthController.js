const jwt = require('jsonwebtoken');
const blacklistedTokens = new Set();
const adminLogin = (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            });
        }
        if (
            email !== process.env.ADMIN_EMAIL ||
            password !== process.env.ADMIN_PASSWORD
        ) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        const token = jwt.sign(
            {
                role: 'admin',
                email: process.env.ADMIN_EMAIL
            },
            process.env.ADMIN_JWT_SECRET,
            { expiresIn: '1d' }
        )
        return res.status(200).json({
            success: true,
            message: 'Admin logged in successful',
            token
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error'
        })
    }
}

const adminLogout = (req, res) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(400).json({
                success: false,
                message: 'Authorization token missing'
            })
        }
        const token = authHeader.split(' ')[1]
        blacklistedTokens.add(token)
        return res.status(200).json({
            success: true,
            message: 'Admin logget out successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
}
const isTokenBlacklisted = (token) => {
    return blacklistedTokens.has(token)
}
module.exports = {
    adminLogin,
    adminLogout,
    blacklistedTokens,
    isTokenBlacklisted
}
