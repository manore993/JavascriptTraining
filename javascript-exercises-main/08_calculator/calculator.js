const add = function(number1 , number2) {
	return number1 + number2;
};

const subtract = function(number1 , number2) {
	return number1 - number2;
};

const sum = function(array) {
  let sum = 0;
	for (let i=0; i<array.length; i++){
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
	for (let i=0; i<array.length; i++){
    product = product * array[i];
  }
  return product;
};

const power = function(number, power) {
	return Math.pow(number, power);
};

const factorial = function(number) {
	let factorial = 1;
  for (let i=1; i<=number; i++){
    factorial = factorial * i;
  }
  return factorial;
};

console.log(factorial(0));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
