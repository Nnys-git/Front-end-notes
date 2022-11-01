require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//要使用session要先require express-session這個module
const session = require("express-session");

//設定express-session的middleware
app.use(
  session({
    secret: process.env.MY_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose
  .connect("mongodb://localhost:27017/exampleDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoDB.");
  })
  .catch((err) => {
    console.log("Connection Failed.");
    console.log(err);
  });

app.get("/", (req, res) => {
  console.log(process.env.MY_SECRET);
  console.log(process.version); //IN node.js process is a Global object 
  res.send("Hi, welcome to homepage.");
});


app.get("/*", (req, res) => {
  res.status(404).send("404 NOT FOUND!");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something goes wrong. We'll fix it soon!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
