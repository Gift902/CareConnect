const Doctor = require('../models/DoctorModel');
exports.getDoctorsCount = async (req, res) => {
    try {
        const count = await Doctor.countDocuments();
        res.status(200).json({
            totalDoctors: count
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch doctors count",
            error: error.message
        });
    }
};