// strings
let firstname: string = 'HELLO';

// numbers
var n: number = 6;
n = 2; // ERROR: Type 'string' is not assignable to type 'number'.

// boolean
let isPresent: boolean = true;

// any
let a: any = 7; // any means this variable can hold any value. (not recommended)
a = false; // NO ERROR
let arr: number[] = [1, 2, 3];
let a2: string[] = ["hi", "friends"];

arr.push(2);


// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Hello'];

// Initialized Incorrectly
// Even though we have a boolean, string, and number 
// the order matters in our tuple and will throw an error.
ourTuple = [5, false, 'Coding God was mistaken'];

function add (a: number, b: number) : number {
    return a + b;
}
add(1, 2) // Argument of type 'string' is not assignable to parameter of type 'number'.

const greet = (name: string) : string => {
    return `Hello ${name}`;
}

// The type void can be used to indicate a function doesn't return any value.
function display (name: string): void {
    console.log(name);
}