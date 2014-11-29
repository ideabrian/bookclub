// Recursive function to find an Even number.

var isEven = function(n) {
    n = Math.abs(n);
   // test for 1 or 0
    if (n === 0) {
        console.log('0:' + n);
       return true;
    }
    if (n == 1) {
        console.log('1:' + n);
        return false;
    }
    if (n < 0) {
        console.log("-:" + n);
         return "error. please contact customer support";   
    }
    if (n > 100) {
         return "whoa, learn how to program a computer will ya.";   
    }
    // otherwise, we need to reduce the value of n
    // by handling n here and re-calling the function
    // console.log("total-recall:" + n);
    n = n - 2;
    return isEven(n);
}

console.log(isEven(1));
console.log(isEven(0));
console.log(isEven(-1));
console.log("try 50 " + isEven(50));
console.log("try 100 " + isEven(100));
console.log("try 75 " + isEven(75));
console.log("try -1 " + isEven(-1));
console.log("try -2 " + isEven(-2));


// find a value in a string

function countBs(str, searchValue) {
    var bCount = 0;
    for (var i = 0; i < str.length; i++){
        if ( str.charAt(i) == searchValue) {
            bCount = bCount + 1;
        }
    }
    return bCount; 
  //   returns a number indicating how many uppercase "B"s are in the string   
}


console.log( countBs("kkkkkk jjjj", 'j'));

