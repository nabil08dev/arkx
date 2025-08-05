
const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question and handle the answer using a callback
function askQuestion(question, callback) {
  rl.question(question, (answer) => {
    callback(answer); // Execute the callback with the user's answer
  });
}

// Usage example
askQuestion("What's your name? ", function (name) {
  console.log(`Hello, ${name}!`);
  rl.close(); // Close the Readline interface
});
const myPromise = new Promise(function (resolve, reject) {
const alright = true;

    setTimeout(function () { 
        if (alright) resolve("Everything went well");
        else reject("Encountered an error");
    }, 2000)
}); 

console.log("1");
myPromise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Promise completed");
  });
console.log("2");