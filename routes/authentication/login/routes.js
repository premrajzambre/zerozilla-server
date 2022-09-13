require("../../../db/config");
const express = require("express");
const User = require("../../../db/schema/user");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = await req.body;
    if (email && password) {
      let user = await User.findOne({ email, password }).select("-password");
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(204).json({ message: "No user found" });
      }
    } else {
      res.status(202).json({ message: "email or password missing" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
