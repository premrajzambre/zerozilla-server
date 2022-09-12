require("../../../db/config");
const express = require("express");
const router = express.Router();
const User = require("../../../db/schema/user");

router.post("/", async (req, res) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
