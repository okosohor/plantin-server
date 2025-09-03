const { Router } = require('express');
const { generateTemperature } = require('../services/temperatureService');


const router = Router();


router.get('/temperature', (req, res) => {
  const temperature = generateTemperature();
  res.json({ temperature });
});

module.exports = router;


