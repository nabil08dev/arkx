// strings
var firstname = 'HELLO';
// numbers
var n = 6;
n = 2; // ERROR: Type 'string' is not assignable to type 'number'.
// boolean
var isPresent = true;
// any
var a = 7; // any means this variable can hold any value. (not recommended)
a = false; // NO ERROR
var arr = [1, 2, 3];
var a2 = ["hi", "friends"];
arr.push(2);
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Hello'];
// Initialized Incorrectly
// Even though we have a boolean, string, and number 
// the order matters in our tuple and will throw an error.
ourTuple = [5, false, 'Coding God was mistaken'];
function add(a, b) {
    return a + b;
}
add(1, 2); // Argument of type 'string' is not assignable to parameter of type 'number'.
var greet = function (name) {
    return "Hello ".concat(name);
};
// The type void can be used to indicate a function doesn't return any value.
function display(name) {
    console.log(name);
}
