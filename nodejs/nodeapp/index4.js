import express from 'express';

const app = express()

app.listen(3000,() =>{
    console.log("Server Started");
})

app.get("/",(req,res)=>{
    res.send("Hello World");
})

// app.get("/products",(req,res)=>{
//     // res.send("Product List");
//     res.json({id :1, name: "Product 1", price: 25});
// })

// app.get("/:name/:age",(req,res)=>{
//     res.send(req.params.name +" " + req.params.age);
// })

app.get("/",(req,res)=>{
    res.send(req.query.name);
})


app.get("/",(req,res)=>{
    res.send(req.query.name+req.query.age);
})


