const express = require("express");
const router = express.Router();
const { register, login, profile } = require("../controller/api_cont");
const auth = require("../middleware/auth");

// === === === register === === === //

router.post("/register", register);

// === === === login === === === //

router.post("/login", login);

// === === === profile === === === //

router.get("/profile", auth, profile);      

module.exports = router;
