const cfg = require('config');
const crypto = require('crypto');

const authController = require('../controllers/authController.js');

const User = require('../models/User.js');

exports.register = async (req, res, next) => {
  try {
    console.log(req.body);
    const newUser = await User.create({ email: req.body.email, password: req.body.password });

    console.log(newUser)

    const tokenContents = {};
    tokenContents.uuid = newUser.uuid;
    tokenContents.email = newUser.email;

    // const refreshToken = authController.signToken('refresh', tokenContents);
    // const token = authController.signToken('id', tokenContents);
    //
    // res.setHeader('authorization', 'Bearer ' + token);

    return res.status(200).json({ status: 200, data: newUser, token: token, message: "User created!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: 500, data: null, message: err });
  }
}

exports.login = async (req, res, next) => {
  console.log('Login pinged')
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log(user)

    if (user) {
      const tokenContents = {};
      tokenContents.uuid = user.uuid;
      tokenContents.email = user.email;

      // const token = authController.signToken('refresh', tokenContents);

      const approvedUser = await user.checkPass(req.body.password);

      const data = {
        user: user,
        // token: token
      }

      // res.setHeader('authorization', 'Bearer ' + token);
      return res.status(200).json({ status: 200, data: data, message: "Logged in!" });
    } else {
      return res.status(404).json({ status: 404, data: null, message: "No user found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json({ status: err.status || 500, message: err.message });
  }
}

exports.getUser = async (req, res, next) => {
  console.log('hey')
  try {
    const userUuid = req.params.userUuid;
    const user = await User.findOne({ where: { uuid: userUuid } });
    console.log(user);
    res.status(200).json({ status: 200, data: user, message: "Got user!" });
  } catch (err) {
    res.status(err.status || 500).json({ status: err.status || 500, message: err.message });
  }
}

exports.forgotPassword = async (req, res, next) => {
  try {
    console.log('hi')
    console.log(req.body);

    const user = await User.findOne({ where: { email: req.body.email } });

    console.log(user);

    const resetPasswordTokenBuffer = await crypto.randomBytes(16);
    const resetPasswordToken = resetPasswordTokenBuffer.toString('hex');
    const resetPasswordExpiration = Date.now() + 43200000;

    console.log(resetPasswordToken);

    const resetPasswordOptions = {
      resetPasswordToken,
      resetPasswordExpiration
    }

    user.update(resetPasswordOptions);

    User.sendForgotPasswordEmail(user.email, resetPasswordToken);

    return res.status(200).json({ status: 200, data: null, message: "Forgot email password sent!" });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json({ status: err.status || 500, message: err.message });
  }
}

exports.resetPassword = async (req, res, next) => {
  try {
    const resetPasswordToken = req.body.resetPasswordToken;

    const updatedUser = await User.update({
      password: req.body.confirmNewPassword
    }, {
      where: { resetPasswordToken: resetPasswordToken }
    });

    return res.status(200).json({ status: 200, data: null, message: "Successfully reset password!" });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json({ status: err.status || 500, message: err.message });
  }
}
