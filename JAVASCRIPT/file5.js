//functions

// function greet()
// {
//     console.log("Good morning");
// }
// greet(); // Calling the function


// greet();
// function greet()
// {
//     console.log("Good morning");
// }

//function arguments

// function greet(student)
// {
//     console.log(`Hello ${student}`)
// }
// greet("Subhash");


// function add(a,b)
// {
//     return a+b;
// }
// let result = add(4,5)
// console.log(result);

// var a;
// console.log(a);
// var a=20;


function add()
{
    console.log(arguments);
    console.log(arguments.length); // Number of arguments passed
}
add(2,4,5,7,8,43,4);