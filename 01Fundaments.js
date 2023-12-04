// 1. Javascript is a intepreted or (just-in-time complied), object-oriented, high-level, single-threaded, dynamic programming language.
// It is most well-known as the scripting language for Web pages, JavaScript can run on both web browsers and servers. A popular JavaScript server-side environment is Node.js.

// object-oriented: Based on objects, for storing most kinds of data
// high-level: we don't have to worry about complex stuff like memory management.
// single-threaded: Single threaded processes contain the execution of instructions in a single sequence
// dynamic language: programming language which allows Run-time modification

// Compilation - Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.
// Interpretation - Interpreter runs through the source code and executes it line by line.
// Just-in-time(JIT) Compilation - Entire code is converted into machine code at once, then executed immediately.

// Javascript Runtime environment
// JS Engine
// Web API's
// Event Loop (Essential for non-blocking concurrency model) - Takes Callback functions from the callback queue and passes it to the call stack to execute.

// 2. JS Engine - program that executes javascript code. It contains two things:
// Call Stack - where our code is being executed using global execution context & execution context for each function
// Heap - unstructured memory pool which stores objects that our application needs.

// Execution Context - Environment in which a piece of javascript is executed. Stores all necesssary information for some code to be executed.
// Inside EC are the following:
// 2.1. Variable Environment - code is scanned for variable declarations, and for each variable a new property is created in the variable environment obeject. 
// Ex: let, const, var declarations / Functions

// Hoisting - Makes some types of variables acessible / usable in the code before they are actually declared. "Variables are lifted to the top of their scope".
// Temporal Dead Zone - Each and every let & const variable get their own temporal dead zone that starts at the beginning of the scope until the line where it is defined.
// Why TDZ ? - Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided.
// Why Hoisting ? - Using functions before actual declaration.

// 2.2. Scope Chain - Scope has access to variables from all outer scopes (variable look up).

// Scoping: How our program's variables are organized and accessed. "Where do variables live?" or "Where can we access a certain variable, and where not?"
// Lexical Scoping: Scoping is controlled by placement of functions and blocks in the code.
// Scope: Space or environment in which a certain variable is declared(variable environment in case of functions). There is global scope, function scope, and block scope.
// Scope of a variable: Region of our code where a certain variable can be accessed.

// 2.3. this keyword - Special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which
// the this keyword is used. It is not static. It depends on how the function is called, and its value is only assigned when the function is actually called.

// regular function - "this" keyword points to owner of the function.
// arrow function - "this" keyword points to the lexical scope (parent function or window object).

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

// 6. Closures
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
