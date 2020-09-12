const cfg = require('config');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const hasher = require('wordpress-hash-node');
const Sequelize = require('sequelize');
const sequelize = require('../index')['sequelize'];

const User = sequelize.define('User', {
  uuid: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(200),
    unique: true,
    validate: {
        isEmail: true,
    },
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(60),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  firstName: {
    type: Sequelize.STRING(100)
  },
  lastName: {
    type: Sequelize.STRING(100)
  },
  isAdmin: {
    type: Sequelize.BOOLEAN
  },
  resetPasswordToken: {
    type: Sequelize.STRING(32),
  },
  resetPasswordExpiration: {
    type: Sequelize.DATE
  }
});

User.prototype.checkPass = function(passToCheck) {
  var userPass = this.password;
  var user = this;
  return new Promise(function(resolve, reject) {
    var wordpressMatch = hasher.CheckPassword(passToCheck, userPass);
    bcrypt.compare(passToCheck, userPass, function(err, isMatch) {
      if (isMatch || wordpressMatch) {
        resolve()
      } else {
        var err = new Error("Incorrect password or parameters.");
        err.status = 401;
        reject(err);
      };
    });
  });
}

User.hashPassword = function(pass) {
  return new Promise(function(resolve, reject) {
    bcrypt.genSalt(5, function(err, salt) {
      if (err) reject(err);
      bcrypt.hash(pass, salt, null, function(err, encrypted) {
        if (err) reject(err);
        resolve(encrypted);
      });
    });
  });
}

User.beforeValidate(async (user, options) => {
  if (user.password && user.password.substring(0, 3) !== '$2a') {
    const hashedPW = await User.hashPassword(user.password);
    user.password = hashedPW;
  } else {
    console.log('hey')
  }
});

module.exports = User;
