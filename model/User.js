const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

// Define the User Model
const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    /* validate: {
      isAlphanumeric: {
        args: true,
        msg: "Username must contain only alphanumeric characters",
      },
      len: {
        args: [3, 20],
        msg: "Username must be between 3 and 20 characters long",
      },
    }, */
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    /* validate: {
      len: {
        args: [8, 20],
        msg: "Password must be between 8 and 20 characters long",
      },
    }, */
  },
  timestamps: true,
  tableName: "users",
});

module.exports = User;
