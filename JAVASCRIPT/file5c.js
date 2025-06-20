//call back function
// let f1 = ()=>
// {
//     console.log("I am f1");
// }
// let main = (x) =>
// {
//     console.log("I am main");
//     x();// Calling the function passed as an argument
// }
// main(f1); // Output: I am f1


// let main = (x) => {
//     console.log("I am main");
//     x(); // Calling the function passed as an argument
// }
// main(() => {
//     console.log("I am f1");
// });

const greet = function(name) {
    console.log(`Hello, ${name}!`);
}
greet("Subhash"); // Output: Hello, Subhash!


const add = (...args) => {
    console.log(args); // Logs all arguments as an array
    console.log(args.length); // Number of arguments passed
}
add(2, 4, 5, 7, 8, 43, 4); // Output: [2, 4, 5, 7, 8, 43, 4] and 7