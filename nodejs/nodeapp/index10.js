import jwt from "jsonwebtoken";
const SECRET = "sometext";
const user = {
    name :"John",
    email:"john@gmail.com",
    role:"admin"
}
// const token = jwt.sign(user,SECRET,{expiresIn:"1h"});
// console.log(token); 

// To verify the token and extract user data
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTE2MDQ5NjYsImV4cCI6MTc1MTYwODU2Nn0.HU5XCMXi22NMPfITleYBIwyL9ISw6-jxMxSx649TNn4";
const userData = jwt.verify(token,SECRET);
console.log(userData);