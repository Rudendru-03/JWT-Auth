const express = require("express");
const authRoute = require("../controllers/authController");

const router = express.Router();

router.get("/signup", authRoute.signup_get);
router.post("/signup", authRoute.signup_post);
router.get("/login", authRoute.login_get);
router.post("/login", authRoute.login_post);

module.exports = router;
