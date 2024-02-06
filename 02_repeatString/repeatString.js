const repeatString = function(str, times) {
    if (times < 0 ) return 'ERROR'
    res = '';
    for (let i = 0 ; i < times ; i++){
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
