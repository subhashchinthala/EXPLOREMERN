import express from "express";
import jwt from "jsonwebtoken";
const SECRET = "secret";
const app = express();
app.listen(8080, () => {
  console.log("Server started");
});
const users = [
  {
    email: "john@gmail.com",
    pass: "1234",
    role: "user",
  },
  {
    email: "cathy@gmail.com",
    pass: "1234",
    role: "admin",
  },
];
app.use(express.json());

const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid Token" });
  }
};

const authorize = (role) => {
  return (req, res, next) => {};
};

app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  const found = users.find(
    (user) => user.email === email && user.pass === pass
  );
  if (found) {
    const token = jwt.sign(found, SECRET, { expiresIn: "1h" });
    res.status(200).json({ user: found, token });
  } else {
    res.status(403).json({ message: "Access Denied" });
  }
});

app.get("/users", authenticate, authorize(req.role), (req, res) => {
  res.json(users);
});