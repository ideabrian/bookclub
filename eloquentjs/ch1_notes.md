## Chapter 1

// These notes are not for public - learning. They're things that stand out for me in my process of programming practice.

Date: 11.28.2014

### There are six (6) basic types of values in JavaScript
+numbers
+strings
+Booleans
+objects
+functions
+undefined values

To create a value, you merely invoke its name.

JavaScript uses 64 bits to store a single number value.

For N decimal digits, the upper limit of numbers that can be represented is 10 to the N
Given 63 binary digits, you can represent 2 to the 64 or about 18 quintillion (18 zeroes)

NaN - Not a number - even though it is a value of the number type. Results when your calcultions don't yield a precise, meaningful result.

###Unary Operators

Not all operators are symbols. Some are written as words. E.g. typeof operator - produces a string value naming the type of the value it operates on.

typeof 4.5
// -> number
typeof "x"
// -> string

Most operators operate on 2 values where typeof operates on only 1.

Using < and > to compare strings relies on the Unicode sequence of the string characters.

There is only one number in JS that's not equal to itself. NaN

###Logical Operators (and, or, not aka: &&, ||, !)

###Undefined Values
null and undefined  - used to denote the absence of a meaningful value.

###Automatic Type Conversion

When an operator is applied to the 'wrong' type of value, JavaScript will quietly convert that value to the type it wants.

If you find yourself getting NaN - look for accidental type conversions.

### Short-Circuting of Logical Operators

The logical operators && and || will convert the value on their left side to Boolean type in order to decide what to do.

In the case of || if the left hand operator is false, it will return the right hand.

??? Questions

How does a compiler coerce a value?
E.g. in JS, you can do console.log('5' + 1) and get "51"
How does it know to convert the 1 to a string and not the 5 to a number?