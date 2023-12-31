//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */
console.log("\nSOLUTION 1")

const faveColors = ['red', 'green', 'black'];
const colorCopy = faveColors.slice();
console.log(colorCopy);


//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */
console.log("\nSOLUTION 2")

colorCopy.push('blue');
console.log(colorCopy);


//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/
console.log("\nSOLUTION 3")

const numbers = [1, 2, 3, 4, 5];
const middleNums = numbers.slice(1, 4);
console.log(middleNums);


//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/
console.log("\nSOLUTION 4")

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352];
const answers = [];

for (let i = 0; i < bigOrSmallArray.length; i++) {
  if (bigOrSmallArray[i] > 100) {
    answers.push('big');
  } else {
    answers.push('small');
  }
}

console.log(answers);
