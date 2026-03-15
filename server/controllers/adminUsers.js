const User = require('../models/UserModel.js');
exports.getUsersCount = async (req, res) => {
    try {
        const count = await User.countDocuments();
        res.status(200).json({ totalUsers: count });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch users count',
            error: error.message
        });
    }
};