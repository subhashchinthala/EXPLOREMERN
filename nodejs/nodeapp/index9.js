import express from 'express';
import bcrypt from 'bcrypt';
// const app = express();
// app.listen(8080, ()=>{
//     console.log("Server stareted");
// })

// const pwd = "12345";
// const hashedpwd =  await bcrypt.hash(pwd, 10);
// console.log(hashedpwd);

const check = await bcrypt.compare("12345", "$2b$10$vDFiguQ026NlbcJ96OdsTeU16REmqiwT0VuUtxSu2XnYdP.cVQJKS");

console.log(check); // true