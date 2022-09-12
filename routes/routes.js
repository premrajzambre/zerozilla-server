const express = require("express");
const router = express.Router();

//Route for Video
router.use("/zerozilla", require("./authentication/routes"));

module.exports = router;
