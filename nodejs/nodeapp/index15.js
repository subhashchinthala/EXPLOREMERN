import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  console.log("MongoDB connected");
  app.listen(4000, () => console.log("Server running on 4000"));
});



const User = mongoose.model("User", new mongoose.Schema({
  username: { type: String, required: true }
}));



app.post("/register", async (req, res) => {
  if (!req.body.username) return res.status(400).json({ msg: "Username required" });
  const user = await User.create({ username: req.body.username });
  res.status(201).json(user);
});