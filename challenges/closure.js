// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
console.log("This is Task 1 of closure.js:","When nestedFunction doesn't see internal within itself, it reaches out to myFunction and accepts its value for internal.");

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation (parameter){
  let counter = 0;
  return function addCounter(){
    for (i = 0; i <= parameter; i++){
    counter += i;
    }
  return counter;
  }
}

const sum5 = summation(5);
console.log("This is Task 2 of closure.js", sum5());