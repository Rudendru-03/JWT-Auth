const express = require("express");
const authRoute = require("./routes/authRoute");
const database = require("./config/database");

const app = express();

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
  // res.send("Hello, World!");
  // return res.json({ message: "Welcome to the API!" });
});
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.use(authRoute);

app.listen("8080", (req, res) => {
  console.log("Server is running on port 8080");
});
