const Sequelize = require('sequelize')
const sequelize = require('../index')['sequelize']

const ReviewItem = sequelize.define('ReviewItem', {
  uuid: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING(200),
    allowNull: false
  }
})

module.exports = ReviewItem
