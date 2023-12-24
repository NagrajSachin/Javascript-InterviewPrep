// 1. Javascript is a intepreted or (just-in-time complied), object-oriented, high-level, single-threaded, dynamic programming language.
// It is most well-known as the scripting language for Web pages, JavaScript can run on both web browsers and servers.
// A popular JavaScript server-side environment is Node.js.

// Object-oriented: Based on objects, for storing most kinds of data
// High-level: we don't have to worry about complex stuff like memory management.
// Single-threaded: Single threaded processes contain the execution of instructions in a single sequence
// Dynamic language: programming language which allows Run-time modification

// Compilation - Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.
// Interpretation - Interpreter runs through the source code and executes it line by line.
// Just-in-time(JIT) Compilation - Entire code is converted into machine code at once, then executed immediately.

// 2. Javascript Runtime environment - Container which includes all the pieces necessary to execute javascript code.

// 2.1 JS Engine - Heart of runtime environment. Program that executes javascript code. It contains two things:

// 2.1.1 Heap - unstructured memory pool which stores objects that our application needs. (Where object are stored in memory)

// 2.1.2 Call Stack - where our code is being executed using global execution context & execution context for each function. (Only one thread of execution. No multitasking)
// Execution Context - Environment in which a piece of javascript is executed. Stores all necesssary information for some code to be executed.

// Variable Environment - code is scanned for variable declarations, and for each variable a new property is created in the variable environment obeject. 
// It contains: let, const, var declarations / Functions / arguments object

// Scope Chain - Scope has access to variables from all outer scopes (variable look up).

// Scoping: How our program's variables are organized and accessed. "Where do variables live?" or "Where can we access a certain variable, and where not?"

// Lexical Scoping: Scoping is controlled by placement of functions and blocks in the code.

// Scope: Space or environment in which a certain variable is declared(variable environment in case of functions). There is global scope, function scope, and block scope.

// Scope of a variable: Region of our code where a certain variable can be accessed.

// Example: 

const myName = 'Jonas';

function first() {
    const age = 30;

    // let and const are block-scoped
    if (age >= 30) {
        const decade = 3;
        // var is function-scoped
        var millenial = true;
    }

    function second() {
        const job = 'teacher';
        console.log(`${myName} is a ${age}- old ${job}`);
        // Jonas is a 30-old teacher
    }

    second();
}

first();

// Hoisting - Makes some types of variables acessible / usable in the code before they are actually declared. "Variables are lifted to the top of their scope".

// Temporal Dead Zone - Each and every let & const variable get their own temporal dead zone that starts at the beginning of the scope until the line where it is defined.

/* Example
const myName = 'Jonas';

if (myName === 'Jonas') {
    // Temporal dead zone for job variable
    console.log(`Jonas is a ${job}`);  -- ReferenceError: Cannot access 'job' before initialization
    const age = 2037 - 1989;
    console.log(age);

    const job = 'teacher';
    console.log(x); -- ReferenceError: x is not defined
} 
*/

// Why TDZ ? - Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided.

// Why Hoisting ? - Using functions before actual declaration.

/* Example

// Variables
console.log(me);  -- undefined
console.log(job); -- ReferenceError: Cannot access 'job' before initialization
console.log(year); -- ReferenceError: Cannot access 'year' before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// functions
console.log(addDecl(2, 3));  -- 5
console.log(addExpr(2, 3)); -- ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow(2, 3)); -- TypeError: addArrow is not a function

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

*/

// this keyword - Special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which
// the this keyword is used. It is not static. It depends on how the function is called, and its value is only assigned when the function is actually called.

// regular function - "this" keyword points to owner of the function.
// arrow function - It doesn't have agruments object & "this" keyword of its own. "this" keyword points to the lexical scope (parent function or window object).

// 2.2 Web API's - API's provided to the engine. (fetch() / setTimeout() / DOM())

// 2.3 Call Back Queue - Ready to be executed callback functions (coming from events)
// 2.4 MicroTasks Queue - Like callback queue, but for callbacks related to promises has priority over callback queue.

// 2.4 Event Loop (Essential for non-blocking concurrency model) 
// Takes Callback functions from the callback queue and passes it to the call stack to execute.
// Decides when each callback is executed: orchestration

// 3. Variables - are the names that assign to computer memory locations where values are stored in it. Variables can represent any type of data.

// Difference between let, var, const
// In javascript users can declare a variable using the above 3 keywords.

// var - The scope of var keyword is global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular
// function can be accessed within the function.

// let - The let keyword is an improved version of the var keyword. The scope of a let variable is only block scoped. It can't be accessible outside the particular block.

// const - The const keyword has all the properties that are the same as the let keyword. Except the user cannot update it. When users declare a const variable, they need to
// initialize it. Otherwise, it returns an error. The user cannot update the const variable once it is declared.

// 4. Datatypes - a data type is a collection or grouping of data values. Following are list of data types supported by javascript.
// String
// Number
// Boolean
// Undefined
// Null
// Object - An Object / An array / A date
// Symbol
// BigInt

// 5. Operators - JavaScript operators are symbols that are used to perform operations on operands.

// Arithmetic Operators (-, + , *, /)
// Comparison Operators (>, <, >=, <=)
// Equality Operators (==, ===)
// Logical Operators (||, &&, !)

// 6. Function - A piece of code that we can reuse over and over again in our code. (DRY Principle)

// 6.1 Function declaration - function can be invoked before it's declaration. Hosting allows this.
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// 6.2 Function expression - Essentially a function value stored in a variable. Function cannot be invoked before declaration, Hosting doesn't allow because variables are hoisted as undefined before initialization.
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// 6.3 Arrow function - Great for a quick one-line functions. (Has no this keyword)
const calcAge3 = birthYear => 2037 - birthYear;

// 6.4 Default Parameters
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
    const booking = {
        flightNum,
        numPassengers,
        price,
    };

    bookings.push(booking); // [{ flightNum: 'LH123', numPassengers: 1, price: 199}]
}

createBooking('LH123');

// 6.5 First Class Functions - store functions in variables / properties or Pass functions as arguments to OTHER functions
const add = (a, b) => a + b;

const counter = {
    value: 23,
    inc: function () { this.value++; }
}

const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet);

// 6.6 Higher Order Functions - function that receives another function / function that returns new function
function count() {  // Higher Order Function
    let counter = 0;
    return function() { // Returned Function
        counter++;
    }
}

// 6.7 Functions Accepting Callback Functions
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function
const transformer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

// 6.8 Function returning function
const greeting = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greetHey = greeting('Hey');
greetHey('Jonas');
greetHey('Steve');

greeting('Hey')('Sachin');

// 6.9 Call / Apply / Bind Methods
// Call - The call method is basically used to invoke the function with different this object.
// Apply - Just like the call method we can also bind the function to any object. Accepts aruguments as an array.
// Bind - The bind() method creates a new function and when that new function is called, it set this keyword to the first argument which is passed to the bind method.
//        sequences of arguments are passed to the new function when the new function is called.

const luftansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book: function (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    }
}

luftansa.book(239, 'Jonas');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
};

const book = luftansa.book;

// Does not work
book(23, 'Sarah');

// Call Method
book.call(eurowings, 23, 'Sarah');

// Apply Method
const flightData = [583, 'George'];
book.apply(eurowings, flightData);

// Bind Method
const bookEW = book.bind(eurowings);
bookEW(64, 'James Bond');

// 6.10 Immediately Invoked Function Expressions (IIFE)
// Regular Function 
(function () {
    console.log('This function will never run again');
})();

// Arrow Function
(() => console.log('This function will never run again'))();

// 6.11. Closures
// A function has access to the variable environment (VE) of the execution context in which it was created, even after that execution context is gone. 
// Closure: VE attached to the function, exactly as it was at the time and place the function was created.

// Formal definition
// A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope,
// which preserves the scope chain throughout time.

// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.

// Example - 1
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
}

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers

// Example - 2
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

g();
f();

// Re-assigning f function
const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

h();
f();

// Example - 3
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3);

// 7. Data Structures: Arrays, Objects, maps, and sets (https://programmingwithmosh.com/javascript/js-objects-arrays-maps-and-sets/)

// 7.1 Object - An object is basically a collection of key-value pairs. It can contain properties and methods.

// Example - 1
const person = { 
    name: 'John Doe', 
    city: 'San Francisco', 
    age: 28,
    fullName: function () {
        return `${this.name} is the full name`;
    }
};

// 7.2 Map - Maps also allow us to create a collection of key-value pairs. To create a map instance, you need to use the Map constructor. 
// Similarly, all operations that can be performed on a map are available as methods, such as set, get, has and forEach.

const objectKey1 = {};
const objectKey2 = 321;

const map = new Map();
map.set(objectKey1, 'this is the value of the first item');
map.set(objectKey2, 'this is the value of the second item');

// retrieving the values of a map is quite easy
console.log(map.get(objectKey1)); // => 'this is the value of the first item'
console.log(map.get(objectKey2)); // => 'this is the value of the second item'

// Maps are also iteration-friendly
map.forEach((value, key) => console.log('Key:', key, 'value:', value));
// => key: {}, value: this is the value of the first item
// => key: 321, value: this is the value of the second item

// pros: 
// Maps are easy to iterate over. In order to do so, a map instance provides methods like forEach(), entries(), keys() and values().
// Maps allow you to use virtually anything as a key: strings, numbers, symbols, objects, booleans and so on and so forth.

// 7.3 Array - arrays are collections whose values are indexed by positive numbers, starting from zero

const colors1 = ['red', 'blue', 'black', 'green', 'white'];
console.log(colors1[0]); //=> "red"
console.log(colors1[2]); //=> "black"

// 7.4 Set - Sets are not meant to be a replacement for arrays. In fact, these two types of collections have a number of significant differences.

const color2 = new Set(['red', 'green', 'blue', 'red', 'blue']);
console.log(colors2); //=> Set(3) {"red", "green", "blue"}

// As you can see, we tried to instantiate a set with repeated values, but this is simply not possible. Sets ensure uniqueness of values.

// Sets also won’t allow you to access an item directly. If you know which value you’re looking for, you can check if a set contains it, 
// by using the .has() method, or you can even delete this value easily, by using delete(). But if you want to find, let’s say, 
// the third item of a set (following the insertion order), you have only two options:

// Iterating over it, with the forEach method or by using the iterators that are returned by the .keys()/.values() methods.
// Converting the set to an array and handling it however you want. 
// Please note that, under the hood, the JS engine iterates over the map anyway in order to produce the output array.

// Conclusion
// Plain objects are the right choice when string (or symbol) keys are enough for you.
// Maps are the way to go if you want to create an association between any two data types.
// Arrays are the ideal option when direct access to items is crucial and uniqueness of values is not required.
// Sets are useful when you want to ensure that values don’t repeat in a same instance.

// 8. ES6 Features - https://diversedaily.com/es6-features-arrow-functions-template-literals-destructuring-spread-rest-operators-and-more/

// 8.1 Arrow functions: They have a shorter syntax compared to traditional function expressions and lexically bind the this value.
// Arrow functions are especially useful when working with higher-order functions and callbacks.

const sum = (a, b) => a + b;
console.log(sum(2, 3)); // Output: 5

// 8.2 Template Literals: Template Literals allow for easy string interpolation and multiline strings in JavaScript.
// They are enclosed by backticks (`) instead of single or double quotes.

const name = 'John';
const message = `Hello, ${name}!
This is a multiline string.`;
console.log(message);

// Template literals support placeholders (${expression}) that can include variables, expressions, or function calls
// making string manipulation more convenient.

// 8.3 Destructuring: Destructuring enables you to extract values from arrays or objects into individual variables. It provides a concise 
// syntax to unpack values.

// Array Destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // Output: 1 2 3

// Object Destructuring
const person1 = { firstname: 'John', age: 30 };
const { firstname, age } = person1;
console.log(name, age); // Output: John 30

// 8.4 Spread / Rest operators: The spread operator (...) and rest parameters provide convenient ways to work with arrays and function arguments.
// The spread operator expands an array into individual elements, while the rest parameter collects multiple function arguments into an array.

// Spread Operator
const numerics = [1, 2, 3];
const expanded = [...numerics, 4, 5];
console.log(expanded); // Output: [1, 2, 3, 4, 5]

// Rest Parameter
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// 9. Functional Programming

// map: This method is used to apply a particular operation on each element of the array in a callback function and then return the update array.
// map() creates a new array from calling a function for every array element
// map() does not execute the function for empty elements
// map() does not change the original array

var arr = [2, 4, 8, 10];
var updartedArr = arr.map(val => val + 2);
console.log(updartedArr); // Output: [4, 6, 10, 12]

// filter: This method is used to return an array that contains the elements which satisfy the condition applied inside the callback function.
// filter() method creates a new array filled with elements that pass a test provided by a function
// filter() does not execute the function for empty elements
// filter() does not change the original array

var arr= [2,4,8,10] 
var updatedArr = arr.filter(val=> val<5) 
console.log(updatedArr); // Output: [2, 4]

// reduce: This method is used to apply a callback function to each element in an array and return a single element
// reduce() method executes a reducer function for array element
// reduce() method returns a single value: the function's accumulated result
// reduce() does not execute the function for empty elements
// reduce() does not change the original array

var arr= [2,4,8,10] 
var updatedArr = arr.reduce((prev, curr)=> curr= prev+curr) 
console.log(updatedArr); // Output: 24

// 10. JSON

// JSON.parse() - takes a JSON string and transforms it into a javascript object

let userString1 = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

let userObj = JSON.parse(userString1);

console.log(userObj); // Output: { name: 'Sammy', email: 'sammy@example.com', plan: 'Pro' }

// JSON.parse() can take a function as a second argument that can transform the object values before they are returned.

let userString2 = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

let userObject1 = JSON.parse(userString2, (key, value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
});

console.log(userObject1); // Output: { name: 'SAMMY', email: 'SAMMY@EXAMPLE.COM', plan: 'PRO' }

// JSON.stringify() - takes a JavaScript object and transforms it into a JSON string.

let userObject2 = {
    name: "Sammy",
    email: "sammy@example.com",
    plan: "Pro"
  };
  
let userString3 = JSON.stringify(userObject2);
  
console.log(userString3); // Output: {"name":"Sammy","email":"sammy@example.com","plan":"Pro"}

// 11. Module Systems: Explore CommonJS, AMD, and ES6 modules

// Module - It is a reusable piece of code that encapsulates implementation details and exposes a public API.

// Module Exports - Syntax by which we can define a module / export a module / import a module.

// AMD (Asynchronous Module Definition)
// export - define
// import - require

// CommonJS 
// export - exports
// import - require

// ES2015 module format
// export - export
// import - import

// 11. Asynchronous Javascript
// It is executed after a task that runs in the background finishes.
// Asynchronous code is non-blocking.
// Execution doesn't wait for an asynchronous task to finish its work. 

// 12. AJAX - Asynchronous Javascript And XML
// Allows us to communicate with remote web servers in an asynchronous way.
// With AJAX calls, we can request data from web servers dynamically.

// 13. Promise - An object that is used as a placeholder for the future result of an asynchronous operation.
// why do we use promises ?
// Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations escaping callback hell.
// promise lifecycle - pending / rejected / fulfilled.

// .then - It's callback method will be called when the promise is fulfilled.
// .catch - It's callback method will be called when the promise is rejected.
// async - The word “async” before a function means one simple thing: a function always returns a promise.
// await - The keyword await makes JavaScript wait until that promise settles and returns its result.
// try - The try statement allows you to define a block of code to be tested for errors while it is being executed.
// catch - The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
// .finally - It's callback method will be called regardless of promise being fulfilled or rejected.

// Throwing Errors Manually - Terminates the then handler and propogates to catch block and excutes it's callback.
// if (!response.ok) {
//   throw new Error('Data Not Found!', response.status);
// }

// 14. Prototypes and Classes