const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    speciality : {
        type: String,
        required: true
    },
    licenseNumber : {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber : {
        type: String,
        required: true
    },
    cv : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true,
        minlength: 8
    }
}, { timestamps: true });
module.exports = mongoose.model('Doctor', doctorSchema);
