## Chapter 3 Functions  
(many notes taken directly from [Eloquent Javascript](http://eloquentjavascript.net/03_functions.html)

The most obvious application of functions is defining new vocabulary.

In programming, we have to add vocabulary to keep from repeating ourselves too much.

###Defining a Function

Just a regular variable definition - where the value given to the variable happens to be a function.

A function is created by an expression that starts with the keyword function.

Functions have a set of parameters and a body, which contains the statements to be executed when the function is called.

Function body must be wrapped in braces, even if it consists of only a single statement.

Some functions produce a value and some produce only a side effect. A return statement determines the return value.

When control runs into a return, it immediately leaves the function and gives the returned value to the calling code.

The return keyword without an express will return undefined.

###Parameter and Scopes

Parameters to a function behave like regular variables, but their initial values are given by the caller of the function, not the code in the function itself.

The parameter value are local to the funciton.

This localness ALSO applies to variables declared with the var keyword inside the function.

GLOBAL VARIABLES - are variables declared outside of any function. You can access these from within a function if you don't overwrite it by declaring a variable of the same name within the function.

###Nested Scope
Functions can be created inside other functions, producing several degrees of locality.

var landscape = function() {
	var result = "";
	var flat = function(size) {
	  for (var count = 0; count < size; count++)
	    result += "_";
	};
	var mountain = function(size) {
	  result += "/";
	  for (var count=0; count < size; count++)
	  	result += "'";
	  result += "\\";
	};
  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

All variables from blocks around a function's definition are visible -- both those in the function bodies that enclose it and those at the top level of the program.

This is called lexical scoping.

In JavaScript Functions are the only thing that create a new scope. You are allowed to use free-standing blocks

###Functions as Values

A function and its name aren't the same thing.

A function value can do all the things other values can do-- you can use it in arbitrary expressions, not just call it.


###Declaration Notation

Function definitions are not part of the top-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope.

This is useulf because it gives us freedom to order code in a way that seems meaningful, without worrying about having to define all functions above their first use.

###The Call Stack

Because a function has to jump back to the place of the call when it returns, the computer must remember the context from which the function was called.

The place where the computer stores this context is the call stack. Every time a function is called, the current context is put on top of this 'stack'. When the function returns, it removes the top context from the stack and uses it to continue execution.

###Optional Arguments

JavaScript is extremely broad minded about the number of arguments you pass to a function.

If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters simply get assigned the value undefined.

Parameters in JavaScript are optional. You can pass too many or not enough?

###Closures

The ability to treat functions as values, combined with the fact that local variables are "re-created" every time a function is called, brings up an interesting question.

What happens to local variables when the function call that created them is no longer active?

Here's an example: It defines a function, wrapValue that creates a local variable. it then returns a function that accesses and returns this local variable.

function wrapValue(n) {
	var locaVariable = n;
	return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

This feature -- being able to reference a specific instance of local variables in an enclosing function -- is called a closure. A function that "closes over" some local variables is called a closure.

This behavior not only frees you from having to worry about lifetimes of variables but also allows for some creative use of function values.

With a slight change, we can turn the previous example into a way to create functions that multiply by an arbitraryamount.

function multiplier(factor) {
	return function(number) {
	  return number * factor;
	};
}

var twice = multiplier(2);
console.logtwice(5));

The explicity localVariable from the wrapValue example isn't needed since a parameter is itself a local variable.


### Recursion

It is ok for a function to call itself, as long as it takes care not to overflow the stack.

A function that calls itself is called a recursive.

Recursion allows some functions to be written in a different style.

Take for example, this alternative implementation of power:

function power(base, exponent) {
	if (exponent == 0)
	  return 1;
	else
	  return base * power(base, exponent - 1);
}


Most recursion is actually slower than looping.

The basic rule is not to worry about efficiency until you know for sure that the program is too slow.

If it is, find out which parts are taking up the most time and start exchanging elegance for efficiency in those parts.