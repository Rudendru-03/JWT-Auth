const User = require("../model/User");

module.exports.signup_get = (req, res) => {
  res.render("signup");
};
module.exports.login_get = (req, res) => {
  res.render("login");
};
module.exports.signup_post = async (req, res) => {
  const { email, password, username } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Use Sequelize's create method to insert data
    const newUser = await User.create({
      username: username,
      email: email,
      password: password, // Make sure this is hashed before storing
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);

    // Return specific error message
    res.status(400).json({ error: error.message || "Failed to create user" });
  }
};
module.exports.login_post = (req, res) => {
  console.log("Request Body : ", req.body);
  const { email, password } = req.body;
  res.send("login Post");
};
