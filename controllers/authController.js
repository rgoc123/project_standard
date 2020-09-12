const cfg = require('config');
const jwt = require('jsonwebtoken');

const User = require('../models/User.js');

exports.signToken = (tokenType, tokenContents) => {

  let expiresIn;
  switch (tokenType) {
    case 'refresh':
      expiresIn = '1s';
      break;
    case 'id':
      expiresIn = '365d';
      break;
    default:
      expiresIn = 0;
  }

  return jwt.sign(tokenContents, cfg['JWT_KEY'], { expiresIn: expiresIn });
}
