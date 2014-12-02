## Ch 6 - The Secret Life of Objects

###Methods

Methods are simply properties that hold function values.

var rabbit = {}

rabbit.speak = function(line) {
	console.log("The rabbit says '" + line + "'");
};

Usually a method needs to do something with the object it was called on. When a function is called on a method -- looked up as a property and immediately claled, as in object.method() -- the special variable this in its body will point to the object that it was called on.

function speak(line) {
	console.log("The " + this.type " " rabbit says '" +
	             line + "'");
}

var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
					"how late it's getting!");

fatRabbit.speak("I could sure use a carrot right now.");				
The apply and bind methods both take a first argument that can be used to simulate method calls. The first argument is in fact used to give a value to 'this'.

There is a method, similar to apply, called 'call'. It also calls the function it is a method of, but takes its arguments normally, rather than as an array. Like apply and bind, call can be passed a specific 'this' value.

###Prototypes

Watch Closely

var empty - {};
console.log(empty.toString);
// function toString(){...}
console.log(empty.toString());
// [object Object]

In addition to their set of properties, almost all objects also have a prototype. A prototype is another object that is used as a fallback source of properties.

When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype's prototype, and so on.

So, who is the prototype of the empty object?

The entity behind almost all objects. Object.prototype.

console.log(Object.getPrototypeOf({})) == Object.prototype);