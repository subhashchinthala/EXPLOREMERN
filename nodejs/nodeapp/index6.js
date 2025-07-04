import express from 'express';

const app = express();
app.listen(8080,() => {
    console.log("Server Started on port 8080");
});
app.use(express.json());
app.post("/",(req,res)=>{
    res.send("post Requset");
});
 