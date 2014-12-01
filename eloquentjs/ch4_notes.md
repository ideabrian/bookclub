## Chapter 4 Data Structures: Objects and Arrays

###Data Sets

JS has a datatype for storing sequences of values. -> An array -> values between square brackets.

var listOfNumbers = [2, 3, 5, 6, 10];

###Properties

Almost all JavaScript values have properties. The exceptions are null and undefined.

null.length;
// TypeError: Cannot read property 'length' of null

The two most common ways to access properties in JavaScript are with a dot and with square brackets.

Both value.x and value[x] access a property on value.

-- but not necessarily the same property.

The difference is in how x is interpreted.


When using a dot, the part after the dot must be a valid variable name, and it directly names the property.

When using square brackets, the expression between the brackets is 'evaluated' to get the property name.

Whereas value.x fetches the property of value named "x", value[x] tries to evaluate the expression x and uses the result as the property name.

The elements in an array are stored in properties. Because the names of these properties are numbers and we often need to get their name from a variable, we have to use the bracket syntax to access them.

###Methods

Both string and array objects contain a number of properties that refer to function values.

Properties that contain functions are generally called methods of the value they belong to. As in, "toUpperCase is a method of a string"

Array Objects:

array.push();
array.pop();
array.join(' ');

PUSH adds values to the end of the array.
POP  does the opposite
JOIN flattens array elements to a single string ( the argument determines the 'glue')

###Objects

Values of the type 'object' are abitrary collections of properties, and we can add or remove these properties as we please.

One way to create an object is by using a curly brace notation.

var day1 = {
	squirrel: false,
	events: ["work", "touced tree", "pizza", "running", "television"]
};

console.log(day1.squirrel);

Inside the block: properties separated by commas. name : expression that provides a value for the property.

Spaces and line breaks are not significant. Properties whose names are not valid variable names or valid numbers have to be quoted.


This means that curly braces have two meanings in JavaScript. At the start of the statement, they start a block of statements. In any other position, they describ an object.

Reading a property that doesn't exist will produce the value undefined.

It is possible to assign a value to a property expression with the = operator.
This either replaces the current value or creates a NEW property on the object if it didn't exist.

Property bindings 'grasp' values, but other variables and properties might be holding onto those same values.

You can think of objects as octopuses with any number of tentacles - each of which has a name inscribed on it.

The 'delete' operator cuts off a leg from such an octopus. It is a unary operator that, when applied to a property access expression, will remove the named property from the object. This is not a common thing to do, but it is possible.

var anObject = {left: 1, right: 2};
console.log(anObject.left);
// 1
delete anObject.left;
console.log(anObject.left);
// undefined
console.log("left" in anObject);
// false
console.log("right" in anObject);
// true

in - determines whether the object has that property.

Arrays are just a kind of object specialized for storing sequences of things.

Array and Objects are mutable.
strings, numbers and Booleans are all immutable - you can combine them and derive new values from them, but when you take a specific string value, that value will always remaind the same.

With objects, however, the value can be modified by changing its properties.

There is a difference between having two references to the same object and having two different objects that contain the same properties.

JavaScript's == operator, when comparing objects, will return true only if both objects are precisely the same value. Comparing different objects will return false, even if they have identical contents. There is no "deep" comparison operator build into JavaScript, which looks at object's contents, but it is possible to write yourself.

###The Lycanthrope's Log

var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
	journal.push({
	  events: events,
	  squirrel: didITurnIntoASquirrel
	});
}

###Computing Correlation

###Objects as Maps

A better way to store correlation data is to use object properties named after the event types. We can use square bracket access notation to create and read properties an can use the in operator to test if the property exists.

There's a special for loop for traversing an object - it distinguishes itself using the word 'in'.

for (var event in map) {
	// statements to process each event in the map collection
}

###The Final Analysis

###Further Arrayology

Object related concepts:

Methods for adding and removing things at the start of an array are unshift and shift

var todoList = [];
function rememberTo(task) {
	todoList.push(task);
}
function whatIsNext() {
	return todoList.shift();
}
function urgentlyRememberTo(task) {
	todoList.unshift(task);
}

there is indexOf(n) and lastIndexOf(n) that search from the right to find the index of n

Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching from.

slice() is another fundamental method, which takes a start index and an end index and returns an array that has only the elements between those indices.
Start index is inclusive while end index is exclusive.

If the end index is not given, it'll grab all the elements after the start index.

Strings also have a slice method.

'concat' - can be used to glue arrays together, similar to what the + operator does for strings.

###Strings and their Properties

Values of type string, number and Boolean are not objects, and though the language doesn't complain if you try to set new properties on them, it doesn't actually store those properties. The values are immutable and cannot be changed.

But, these values do have some built in properties. Every string value has a number of methods. The most useful ones are probably slice and indexOf,

console.log("coconuts".slice(4,7));
// nut
console.log("coconut".indexOf("u"));
// 5

One difference between string's indexOf and an array's indexOf is that a string.indexOf can take a string containing more than one character, whereas a corresponding array method looks only for a single element.

The 'trim' method removes whitespace

string.length
string.charAt([index])

###The Arguments Object

Whenever a function is called, a special variable named arguments is added to the environment in which the function body runs. The variable refers to an object that holds all of the arguments passed to the function. Remember, that in JavaScript you are allowed to pass more (or fewer) arguments to a function than the number of parameters the function itself declares).

function noArguments() {}
noArguments(1,2,3); // This is okay
function threeArguments(a, b, c) {}
threeArguments(); // And so is this

The arguments object has a length property that tells us the number of arguments that were really passe to the function. It also has a property for each argument, named 0, 1, 2 and so on.

It's a lot like an array, but this object doesn't have any array methods (like slice or indexOf), so it is harder to use than a real array.

Some functions can take any number of arguments, like console.log

###The Math Object

Math is a grab-bag of number-related utility functions such as Math.max, Math.min, and Math.sqrt

The Math object is used as a container to group a bunch of related functionality. There is only one Math object, and it is almost never useful as a value. Rather, it provides a namespace so that all these functions and values do not have to be global variables.

Having too many global variables "pollutes" the namespace. That more names that have been taken, the more likely you are to accidentally overwrite the value of some variable.

Many languages will stop you, or at least, warn you when you are defining a variable with a name that is already taken. JavaScript does neither. Be warned.

Math.random() returns a pseudo-random number between 0 and 1.
If we want a whole number instead of a fractional one, we can use Math.floor (which rounds down to the nearest whole number) on the result of Math.random()

Math.ceil()
Math.round()

###The Global Object

The global space, in which global variables live, can also be approached as an object in JavaScript. Each global variable is present as a property of this object.

In browsers, the global scope object is stored in the window variable.

var myVar = 10;
console.log("myVar" in window);
true

###Summary

Objects and arrays provide ways to group several values into a single value.

Most values in JavaScript have properties, the exceptions being null and undefined.

Properties are accessed using value.propName or value['propName']

Objects tend to use names for their properties and store more or less fixed set of them.

Arrays usually contain varying numbers of conceptually identical values and use numbers (starting from 0) as the names of their properties.

Methods are functions that live in properties and (usually) act on the value they are a property of.

Objects can serve as maps by associating values with names. The in operator can be used to find out whether an object contains a property with a given name. The same keyword 'in' can also be used in a for loop (for (var nam in object)) to loop over an object's properties.


	