function generateTemperature(min = -30, max = 50) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { generateTemperature };


