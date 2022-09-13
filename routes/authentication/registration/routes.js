require("../../../db/config");
const express = require("express");
const router = express.Router();
const User = require("../../../db/schema/user");

router.post("/", async (req, res) => {
  console.log("Request body :", req.body);
  try {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
