console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}


// Call the function to test
console.log(hello('Hello World!'));


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(firstName) {
  return `Hello, ${firstName}!`;
}
// Remember to call the function to test
console.log(helloName("Alexa"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
   return firstNumber + secondNumber;
  
}
console.log(addNumbers(7, 9));

// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree) {
  return numOne * numTwo * numThree;

}

console.log(multiplyThree(1, 10, 20));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length-1];
}

console.log(getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (const currentItem of array) {
    console.log(currentItem);

    if(currentItem === value){
      return true;
    }
  }

  return false;
}

console.log(find("cat", ["cat", "dog", "mouse"]))
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(numbers) {
  let sum = 0;
  // TODO: loop to add items
  for (let currentNum of numbers){
    sum += currentNum;
  }
  // TODO: return the sum
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}