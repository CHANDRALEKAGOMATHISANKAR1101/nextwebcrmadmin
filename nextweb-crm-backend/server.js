const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
 
dotenv.config();
 
const app = express();
 
// Connect to the Database
connectDB();
 
// Middleware
app.use(express.json());
 
app.get('/', (req, res) => {
  res.send('API Running');
});
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));