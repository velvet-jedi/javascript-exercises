const removeFromArray = function(arr, ...values) { //
    // var at = arr.indexOf(value);

    // return arr.splice(at, 1); // test 1

    
    arr = arr.filter(item => !values.includes(item)); // test 2

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
