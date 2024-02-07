const fibonacci = function(a) {

    if (a == 0 ) return 0;
    if (a < 0) return 'OOPS';
    var fibo = [];
    for (let i = 0 ;  i < a ; i++){
        if (i == 1 || i == 0){
            fibo.push(1);
        }
        else {
            fibo.push(fibo[i-1] + fibo[i-2]);
        }
    }
    return fibo[a-1];
};

// Do not edit below this line
module.exports = fibonacci;
