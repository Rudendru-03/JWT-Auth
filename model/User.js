const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("Users", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlphanumeric: true,
      len: [3, 20],
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 20],
    },
  },
});

module.exports = User;
