const sequelize = require("../config/database");
const { User } = require("../model/User");

(async () => {
  try {
    await sequelize.sync({ alter: true }); // Create tables based on models
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
})();
