require('dotenv').config();
const express = require('express');
const weatherRouter = require('./routes/temperature');
const cors = require("cors");


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use('/', weatherRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});