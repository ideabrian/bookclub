## Chapter 2

###Program Structure

###Expressions and Statements

A fragment of code that produces a value is called an expression.

The simplest kind of statement is an expression with a semicolon after it.

1;
!false;

If a statement changes the internal state of the machine, that's a side effect.

###Variables

How does a program keep an internal state? How does it remember things?

After a variable has been defined using the var keyword, its name can be used as an expression.

Variable names can be any name not reserved as a keyword.

Think of variables not as boxes, but as tentacles. They do not contain values, they grasp them.

+Two variables can refer to the same value.
+A program can only access the values that it still has a hold on.
+When you need to remember something, grow a tentacle to hold on to it - or reattach an existing tentacle to it.

When you define a variable without giving it a value, the tentacle has nothing to grasp. Ask for the value and you'll get undefined.

**A single var statement may define multiple variables separated by commas.

var one = 1, two = 2;

###Keywords and Reserved Words

###The Environment

The collection of variables and their values that exist at a given time is called the environment. When a program starts up, this environment is not empty.

The Environment ALWAYS contains variables that are part of the language standard and variables that provide ways to interact with the surrounding system.

E.g. In a browser, there are variables and functions to inspect and influence the currently loaded website and to read mouse and keyboard input.

###Functions

A lot of the values in a default environment are of type function. 

You can call a function by putting parentheses after an expression that produces a function value. Usually, you'll directly use the name of the variable that holds the function.

Values given to functions are called arguments.

###The console.log function

Though variable names cannot contain period characters, console.log has one. That's because console.log isn't a simple variable. It's actually an expression that retrieves the log property from the value held by the console variable.

console["memory"];

MemoryInfo {jsHeapSizeLimit: 1620000000, usedJSHeapSize: 10000000, totalJSHeapSize: 18200000}

###Return Values

Showing a dialog box or writing text to the screen is a side effect. Many functions are used for the side effects they produce.

Functions may also produce values. E.g. Math.max takes any number of number values and gives back the greatest.


###Prompt and Confirm
prompt() and confirm()

###Control Flow

When your program contains more than one statement, the statements are executed, predictably, from top to bottom.

###Conditional Execution

Braces do for statements what parentheses do for expressions. (Group them together).
A block.


It's a good idea to get used to counting from 0.

###Indenting Code


###For Loops

All the statements related to the state of the loop are grouped together.

###Breaking Out of a Loop

Having the loop's condition produce false is not the only way a loop can terminate.
the 'break' keyword has the effect of immediately jumping out of the enclosing loop.

###Switch

switch() {
	case "":
		statement;
		break;
	case "":
		statement;
		break;
	default:
		statement;
}

###Comments

// or /**/

###Summary

The environment is the set of variables defined.

Functions are special values that encapsulate a piece of program.
Invoke functions by writing functionName(arg1, arg2)
