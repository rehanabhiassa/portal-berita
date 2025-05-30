const express = require("express");

const router = express.Router();

const signupController = require("../controllers/signup.js");

router.post("/", signupController);

module.exports = router;
