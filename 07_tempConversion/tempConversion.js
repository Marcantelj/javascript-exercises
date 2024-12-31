const convertToCelsius = function(fahrenheit) {
  //convertToCelsius(32) // fahrenheit to celsius, should return 0
  return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  //convertToFahrenheit(0) // celsius to fahrenheit, should return 32
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
