const points = [2,3,4,1,34,45,5];
// const newarr = points.map((value,index,arr)=>
// {
//     // console.log(value,index,arr);
//     return value * 2; // Example operation: doubling each value
// })
// console.log(newarr); // Output: [4, 6, 8, 2, 68, 90, 10]

// const filteredArr = points.filter((value,index,arr)=>
// {
//     // console.log(value,index,arr);
//     return value > 10; // Example condition: filtering values greater than 10
// })

// console.log(filteredArr); // Output: [34, 45]
// const findValue = points.find((value,index,arr)=>
// {
//     // console.log(value,index,arr);
//     return value > 10; // Example condition: finding the first value greater than 10
// })
// console.log(findValue); // Output: 34

const newarr = points.reduce((accumulator, value, index, arr) => {
    return accumulator + value; 
}, 10); 
console.log(newarr); 