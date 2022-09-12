const express = require("express");
const router = express.Router();

//Route for registration
router.use("/registration", require("./registration/routes"));

//Route for login
router.use("/login", require("./login/routes"));

module.exports = router;
