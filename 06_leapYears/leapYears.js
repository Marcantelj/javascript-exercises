const leapYears = function(year) {
    if (year % 4 !== 0) { // not equal zero true
        return false;
    }
    else if (year % 100 == 0 && year % 400 !== 0) { // 400 not equal zero true  
        return false;
    }
    else {
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;

/* 
Leap year % 4 
years % 100 are not leap years unless % 400 = is leap year



*/