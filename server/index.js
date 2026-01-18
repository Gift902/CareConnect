const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const UserRoutes = require('./routes/UserRoutes.js');
const PORT = 5001;
const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.use('/api/Users', UserRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
