const convertToCelsius = function(temp) {
  var temp = temp;
  var cel = (temp-32) * 1/1.8;
  return Number(cel.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  var temp = temp;
  var fah = (temp * 9/5) + 32;
  return Number(fah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
