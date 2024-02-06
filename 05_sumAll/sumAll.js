const sumAll = function(a, b) {
  if (typeof(a) != 'number' || typeof(b) != 'number'){
    return 'ERROR';
  }  

  if (a<0 || b<0){
    return 'ERROR';
  }  
  
  var sum = 0;

  if (a > b ) {
      var larger = a;
      var smaller = b;
  } else if (b > a) {
      var larger = b;
      var smaller = a;
  }

  for (i = smaller ; i < larger+1 ; i++){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
