const User = require("../model/User");

module.exports.signup_get = (req, res) => {
  res.render("signup");
};
module.exports.login_get = (req, res) => {
  res.render("login");
};
module.exports.signup_post = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const newUser = await User.create({
      username,
      email,
      password,
    });
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({ error: "Failed to create user" });
  }
};
module.exports.login_post = (req, res) => {
  console.log("Request Body : ", req.body);
  const { email, password } = req.body;
  res.send("login Post");
};
