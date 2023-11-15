const bcrypt = require("bcrypt");
const {
  addUser,
  getUserByEmail,
  getUserByPhone,
  updateuser,
} = require("../collection/Users");
const validator = require("validator");
const jwt = require("jsonwebtoken");

// === === === controller === === === //

exports.register = async (req, res) => {
  try {
    const { email, name, phone, password, cpassword } = req.body;
    if (!email || !validator.isEmail(email)) {
      throw new Error(
        JSON.stringify({ status: 400, message: "Please provide a valid email" })
      );
    } else if (!phone || !validator.isMobilePhone(phone, "en-IN")) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Please provide a valid Mobile number",
        })
      );
    } else if (!password || !cpassword) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Please input every field",
        })
      );
    } else if (password !== cpassword) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Both password must be identical",
        })
      );
    } else if (!validator.isStrongPassword(password)) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Please enter a strong password",
        })
      );
    }
    if ((await getUserByEmail(email)).result) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "email is already associated with another account",
        })
      );
    }
    if ((await getUserByPhone(phone)).result) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "phone number is already associated with another account",
        })
      );
    }
    await addUser({ email, name, phone, password });
    res
      .status(201)
      .json({ result: true, message: "registration was successful" });
  } catch (error) {
    let err = JSON.parse(error.message);
    res.status(err.status || 400).json({ result: false, message: err.message });
  }
};

// === === === login === === === //

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !validator.isEmail(email)) {
      throw new Error(
        JSON.stringify({ status: 400, message: "Please provide a valid email" })
      );
    } else if (!password || !validator.isStrongPassword(password)) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Please enter a valid password",
        })
      );
    }
    let user = await getUserByEmail(email);
    if (!user.result) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "either your email or password is incorrect",
        })
      );
    } else if (!bcrypt.compare(password, user.user.password)) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "either your email or password is incorrect",
        })
      );
    }
    const token = jwt.sign(
      { email: email.toLowerCase(), name: user.user.name },
      process.env.SECRET_KEY,
      {
        expiresIn: "432000 seconds",
      }
    );
    let updatedUser = {
      ...user.user,
      tokens: user.user.tokens ? [...user.user.tokens, token] : [token],
    };
    let updater = await updateuser(updatedUser);
    if (updater.result) {
      res
        .status(200)
        .cookie("idnty", token, {
          expires: new Date(Date.now() + 432000000),
        })
        .json({ result: true, message: "logged in" });
    } else {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Please check your email or password",
        })
      );
    }
  } catch (error) {
    const err = JSON.parse(error.message);
    res.status(400 || err.status).json({ result: false, message: err.message });
  }
};

// === === === profile === === === //

exports.profile = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    const err = JSON.parse(error.message);
    res.status(400 || err.status).json({ result: false, message: err.message });
  }
};
