///////////////////
// Apple Orchard //
///////////////////

/* Nicholas Kingston
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
console.log("\nSOLUTION 1")
// This program calculates the total number of acres picked for the entire week.

let totalAcres = 0
function simpleArraySum(ar) {
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
      if(typeof ar[i] == `number`) sum += ar[i];
    }
    return sum;
  }
  

  totalAcres += simpleArraySum(fujiAcres)
  totalAcres += simpleArraySum(galaAcres)
  totalAcres += simpleArraySum(pinkAcres)

  console.log("Total acres of all orchards: ", totalAcres)

  

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
console.log("\nSOLUTION 2")
// This program calculates the average number of acres picked per day. 
// I divided by 21 because the 3 orchards picks were 7 days each. 
const averageDailyAcres = totalAcres / 21;
console.log("Average Daily Pick: ", averageDailyAcres)



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
// This program calculates the days left to finish picking based on average pick per day.

console.log("\nSOLUTION 3")

while (acresLeft > 0) {
    days++;
    acresLeft -= averageDailyAcres;
}
console.log("Days left to finish all acres: ", days);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
// This program calculates tons of apples picked based on 6.5 tons per acre.
console.log("\nSOLUTION 4")

const fujiTons = fujiAcres.slice().map(acres => acres * 6.5);
let galaTons = galaAcres.slice().map(acres => acres * 6.5);
let pinkTons = pinkAcres.slice().map(acres => acres * 6.5);

console.log("Fuji Tons: ", fujiTons);
console.log("Gala Tons: ", galaTons);
console.log("Pink Tons: ", pinkTons);


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
// This program calculates the total number of pounds picked per variety.
console.log("\nSOLUTION 5")

let fujiPounds = fujiTons.reduce((total, tons) => total + tons * 2000, 0);
let galaPounds = galaTons.reduce((total, tons) => total + tons * 2000, 0);
let pinkPounds = pinkTons.reduce((total, tons) => total + tons * 2000, 0);

console.log("Fuji Pounds: ", fujiPounds);
console.log("Gala Pounds: ", galaPounds);
console.log("Pink Pounds: ", pinkPounds);


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
// This program calculates the profit based on the price multiplied by pounds.
console.log("\nSOLUTION 6")

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log("Fuji Profit: $", fujiProfit);
console.log("Gala Profit: $", galaProfit);
console.log("Pink Profit: $", pinkProfit);


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
// This program calculates total profit. 
console.log("\nSOLUTION 7")

let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log("Total Profit: $", totalProfit)