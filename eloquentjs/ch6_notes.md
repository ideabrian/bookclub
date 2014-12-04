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

Many objects don't directly have Object.prototype as their prototype, but instead of another object, which provides its own default properties.

Functions derive from Function. prototype, and arrays derive from Array.prototype.

The Object.getPrototypeOf function obviously returns the prototype of an object. You can use Object.create to create an object with a specific prototype.

###Constructors

A more convenient way to create objects that derive from shared prototype is to use a constructor. In JavaScript, calling a function with the new keyword in front of it causes it to be treated as a constructor.

The constructor will have it's this variable bound to a fresh object, and unless it explicitly returns another object value, this new object will be returned from the call.

An object created with 'new' is said to be an instance of its constructor.


Here is a simple constructor for rabbits. It is a convention to capitalize the names of constructors so that they are easily distinguished from other functions.

function Rabbit(type) {
	this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);
// black

Constructors (in fact, all functions) automatically get a property named prototype, which by default holds a plain, empty object that derives from Ojbect.prototype. Every instance created with this constructor will have this object as its prototype.

So, to add a speak method to rabbits created with the Rabbit constructor, we can simple do this:

Rabbit.prototype.speak = function(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'");
};
blackRabbit.speak("Doom...");

It is important to note the distinction between the way the prototype is associated with a constructor (through its prototype property) and the way objects have a prototype (which can be retrieved with Object.getPrototypeOf). The actual prototype of a constructor is Function.prototype since constructors are functions.

Its prototype property will be the prototype of instances created through it but is not its own prototype.
