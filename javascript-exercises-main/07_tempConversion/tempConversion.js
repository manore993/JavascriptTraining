const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);
  if (celsius % 1 == 0){
    return celsius;
  } else {
    return Math.round(celsius * 10) / 10;
  }
  
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius* (9/5)) + 32 ;
  if (fahrenheit % 1 == 0){
    return fahrenheit;
  } else {
    return Math.round(fahrenheit * 10) / 10;
  }
};

// console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
