const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return Math.abs(a-b);
};

const sum = function(arr) {
  var sum = 0;
  for (elem of arr) {
    sum += elem;
  }
  return sum;
	
};

const multiply = function(arr) {
  var prod = 1;
  for (elem of arr) {
    prod *= Number(elem);
  }
  return Number(prod);

};

const power = function(a, b) {
	return a**b;

};

const factorial = function(a) {
	var factor = a;
  if (a == 1 || a == 0) return 1;
  return factor * factorial(a-1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
