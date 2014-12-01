// The Sum of a range

// The intro to the book alluded to the following as a nice way to sum a range

// console.log(sum(range(1, 10)));

// Write a range function that takes two arguments, start and end and returns an array
// containing all the numbers from start up to (and including) end.

function rangeOld(start, end) {
	
	rangeArray = [];
	for (var i = start; i < end + 1; i++) {
		rangeArray.push(i);
	}
	return rangeArray;
}

// next write a sum function that takes an array of numbers and returns the sum
// of these numbers. Run the previous program to see whether it does indeeed return 55

function sum(arrayToSum) {
	var total = 0;
	for (var i = 0; i < arrayToSum.length; i++) {
		total += arrayToSum(i);
	}
	return total;
}

// as a bonus assignment, modify the range function to take an optional third argument
// that is the "step" value used to build up the array. If no step is given, the array
// elements go up by increments of one, correspond to the old behavior.

// The function call (1, 10, 2) should return [1, 3, 5, 7, 9]

// Make sure it also works with negative step values so that range (5, 2, -1)
// produces [5, 4, 3, 2]

function range(start, end, step) {
	// cases to handle
	rangeArray = [];

	// [ ]  start < end step +	
	// [ ]  start == end step 
	if (start <= end){
        step = step || 1;
        for (var i = start; i < end+1; i+=step)
		{
			rangeArray.push(i);
		}
		
	}
	// [ ]  start > end step -

    if (start >= end){
        step = step || -1;
        for (var i = start; i > end-1; i+=step){
        	rangeArray.push(i);
        }
    }

    return rangeArray;
}

console.log(range(10,1));

// Reversing an Array

// Arrays have a reverse method, which changes the array by inverting the order
// in which its elements appear.
// Write 2 functions

// function 1

function reverseArray(arrayIn) {
	var arrayOut = [];

	for (var i = 0; i < arrayIn.length; i++) {
		arrayOut.unshift(arrayIn[i]);
		}
	return arrayOut;
}

// function 2
// in place algorithm here:
// http://en.wikipedia.org/wiki/In-place_algorithm
function reverseInPlace(arrayIn) {
    for (var i=0; i <= Math.floor((arrayIn.length - 2)/2); i++){
      var tmp = arrayIn[i];
        arrayIn[i] = arrayIn[arrayIn.length -1 - i];
        arrayIn[arrayIn.length - 1 - i] = tmp;
    }
    return arrayIn;
}


// A list

// Objects, as generic blobs of values, can be usd to build all sorts of data structures
// A common data structure is a list (not to be confused with the array). A list is
// a nested set of objects, with the first object holding a reference to the second,
// the second to the third, and so on.

var list = { value: 1, rest: {value: 2,rest: {value: 3,rest: null}}};


// Write a function arrayToList that builds up a data structure like the previous
// on when given [1, 2, 3] as argument, and 

// write a listToArray function that produces an array from a list.

// write the helper function 'prepend' which takes an element and a list and creates
// a new list that adds the element to the front of the input list

// and 'nth' which takes a list and a number and returns the element at the given
// position in the list, or undefined when there is no such element

// also, write a recursive version of nth.

function arrayToList(arrayIn) {
	listOut = {};
	for (element in arrayIn) {
		listOut[value] = element
	}
	return listOut;
}
