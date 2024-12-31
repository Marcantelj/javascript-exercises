const sumAll = function(num1, num2) {
    var total = 0; 
    if(typeof(num1) === 'object' || typeof(num2) === 'object') {return "ERROR";}
    else if(typeof(num1) === 'string' || typeof(num2) === 'string') {return "ERROR";}
    else if (num1 <= -1 || num2 <= -1) {return "ERROR";}
    else if(!Number.isInteger(num1) || !Number.isInteger(num2)) {return "ERROR";}
    else if (num1>num2) {
        for (let i = num2; i < num1+1; i++) {
            total += i;
        }
    }
    else {
        for (let i = num1; i < num2+1; i++) {
            total += i;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
