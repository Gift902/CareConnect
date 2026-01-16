const express = require('express');
const PORT = 3001;
const app = express();
app.get('/', (req, res) => {
    res.send("The backend is runnign well!");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
