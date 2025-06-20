//arrays
const scores = [10, 20, 30, 40, 50];
// console.log(scores); // Output: [10, 20, 30, 40, 50]
// console.log(scores[0]); // Output: 10
// console.log(scores.length); // Output: 5
// console.log(scores[scores.length - 1]); // Output: 50
// console.log(scores[2]); // Output: 30
// console.log(scores[scores.length - 2]); // Output: 40
// console.log(scores[scores.length - 3]); // Output: 30
// console.log(scores[scores.length - 4]); // Output: 20
// console.log(scores[scores.length - 5]); // Output: 10
// console.log(scores[scores.length - 6]); // Output: undefined (out of bounds)
// scores.push(60); // Add 60 to the end of the array
// scores.unshift(0); // Add 0 to the beginning of the array
// scores.shift();
// scores.pop();
// console.log(scores); // Output: [10, 20, 30, 40,

for(let i = 0; i < scores.length; i++) {
    console.log(scores[i]); 
}
