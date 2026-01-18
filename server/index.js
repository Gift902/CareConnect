const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const UserRoutes = require('./routes/UserRoutes.js');
const doctorRoutes = require('./routes/doctorAuthRoutes.js');
const PORT = 5001;
const app = express();
connectDB();
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use('/uploads', express.static('uploads'));
app.use('/api/Users', UserRoutes);
app.use('/api/doctors', doctorRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
