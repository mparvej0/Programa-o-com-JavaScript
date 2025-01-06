// Qs1. Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" ||char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}

// Qs2. Create an arrow function to perform the same task.
const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" ||char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}

// Qs3. For a given array of numbers, print the square of each value using the forEach loop.
let nums = [76, 52, 39];
let calcsquare = ((num) => {
    console.log(num * num);
});
nums.forEach(calcsquare);
// Qs4. We are given array of marks of students. Filter our of the marks of students that scored 90+.

// Qs5. Take a number n as input from user. Create an array   from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.