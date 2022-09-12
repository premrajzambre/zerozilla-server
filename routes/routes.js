const express = require("express");
const router = express.Router();

//Route for authentication
router.use("/zerozilla/auth", require("./authentication/routes"));

//Route for agency
router.use("/zerozilla/agency", require("./agency/routes"));

module.exports = router;
