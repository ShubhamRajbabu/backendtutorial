const User = require("../users/usermodel");

const home = async (req, res) => {
  res.status(200).send({ msg: "Calling from home available in controller" });
};

const register = async (req, res) => {
  try {
    const { username, email, password, isAdmin } = req.body;

    const userExist = await User.findOne({
      email,
    });

    if (userExist) {
      return res.status(400).send({ msg: "email already exist" });
    } else {
      const newUser = await User.create({
        username: username,
        email: email,
        password: password,
        isAdmin: isAdmin,
      });
      res.status(201).send({
        msg: "registration successfull",
        token: await newUser.generateToken(),
        UserId: newUser._id.toString(),
      });
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (!userExist) {
    res.status(400).json({ msg: "Invalid credentials" });
  } else {
    const isPasswordMatch = await userExist.comparePassword(password);

    if (!isPasswordMatch) {
      res.status(401).json({ msg: "Invalid Email or Password" });
    } else {
      await res.status(200).json({
        msg: "login successfull",
        token: await userExist.generateToken(),
        UserId: userExist._id.toString(),
      });
    }
  }
};

module.exports = { home, register, login };
