const Doctor = require('../models/DoctorModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.registerDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      speciality,
      licenseNumber,
      phoneNumber,
      password
    } = req.body;
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({
        message: "Doctor already exists"
      });
    }
    if (!req.files || !req.files.cv || !req.files.image) {
      return res.status(400).json({
        message: "CV and profile image are required"
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const cvFile = req.files.cv[0].filename;
    const imageFile = req.files.image[0].filename;
    const doctor = new Doctor({
      name,
      email,
      speciality,
      licenseNumber,
      phoneNumber,
      password: hashedPassword,
      cv: cvFile,
      image: imageFile
    });
    await doctor.save();
    res.status(201).json({
      message: "Doctor registered successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server error during doctor registration"
    });
  }
};
exports.loginDoctor = async (req, res) => {
    try {
        const {email, password} = req.body;
        const doctor = await Doctor.findOne({ email });
        if(!doctor) {
            return res.status(404).json({message: "Doctor not found"});
        }
        const isMatch = await bcrypt.compare(password, doctor.password);
        if(!isMatch) {
            return res.status(401).json({message: "Invalid credentials"});
        }
        const token = jwt.sign(
            {id: doctor._id, role: 'doctor'},
            process.env.JWT_SECRET,
            {expiresIn: '7d'}
        );
        res.json({
            token,
            doctor: {
                id: doctor._id,
                name: doctor.name,
                email: doctor.email,
                speciality: doctor.speciality
            }
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
