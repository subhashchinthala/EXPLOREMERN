// let name = "John";
// console.log(name);


//comand line arguments
// let name = process.argv[2];
// console.log("Helloe " + name);


// let name1 = process.argv[2];
// let name2 = process.argv[3];
// console.log("Hello " + name1 + " and " + name2);


// let name = process.argv[2] || "subhash";
// console.log("Hello " + name);



import express from 'express';
const app = express();
const PORT = process.argv[2] || 4000;

app.listen(PORT,(req,res)=>{
    console.log(`SErver Stared ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`Hello World ${PORT}`);
});
