require('dotenv').config();
const express = require('express');
const weatherRouter = require('./routes/weather');


const app = express();
const PORT = process.env.PORT || 3000;

app.use('/weather', weatherRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});