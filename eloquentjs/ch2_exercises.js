// Write a loop that makes seven calls to console.log to output the following triangle

// #
// ##
// ###
// ####
// #####
// ######
// #######


var output = "#";
for(var i = 0; i < 7; i++) {
	console.log(output);
	output += "#";
}

	

// It may be useful to know you can find the length of a string by writing .length after it

// FizzBuzz

/*
 * Print all the numbers 1 - 100 with two exceptions:
 * For numbers divisible by 3, print "Fizz" instead of number
 * For numbers divisible by 5 ( and not 3 ) print "Buzz"
 * 
*/

for (var i = 1; i <= 100; i++) {
	if ( i % 15 == 0 ){
		console.log("FizzBuzz");
	} else if ( i % 5 == 0 && !( i % 3 == 0 )) {
		console.log("Buzz");
	} else if ( i % 3 == 0 ) {
		console.log("Fizz");
	} else {
	  console.log(i);
	}
}

// Chess Board
// Write a program that creates a string that represents an 8x8 grid, using
// newline characters to separate lines. At each position of the grid there
// is either a space or a '#'. The characters should form a chess board.

// Passing the string to console.log should show something like:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

var even = function (num) {
    line = '';
    for (var i = 0; i < num; i++) {
        if (i % 2 === 0) {
            line += "x";
        } else {
            line += "o";
        }
    }
    return line;
};

var odd = function (num) {
    line = '';
    for (var i = 0; i < num; i++) {
        if (i % 2 === 0) {
            line += "o";
        } else {
            line += "x";
        }
    }
    return line;
};

var grid = function (num) {
    for (var i = 0; i < num; i++) {
        if (i % 2 === 0) {
            console.log(odd(num));
        } else {
            console.log(even(num));
        }
    }
}

grid(prompt("Enter a number:"));



