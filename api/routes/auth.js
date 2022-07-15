const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//Register
router.post("/register", async (request, response) => {
  try {

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(request.body.password, salt)

    const newUser = new User({
      username: request.body.username,
      email: request.body.email,
      password: hashedPass
    })
    const user = await newUser.save();
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json(error);
  }
})

// Login
router.post("/login", async (request, response) => {
  try {
    const user = await User.findOne({ username: request.body.username })
    !user && response.status(400).json("Wrong Username!")

    const validated = await bcrypt.compare(request.body.password, user.password)
    !validated && response.status(400).json("Wrong Password!")

    const { password, ...others } = user._doc;
    response.status(200).json(user)

  } catch (error) {
    response.status(500).json(error)
  }
})

module.exports = router