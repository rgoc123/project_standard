const ReviewItem = require('../models/ReviewItem.js');

exports.getReviewItems = async (req, res, next) => {
  try {
    const reviewItems = await ReviewItem.findAll()

    return res.status(200).json({ status: 200, data: reviewItems, message: 'Got all review items' })
  } catch (err) {
    return res.status(500).json({ status: 500, data: null, message: err.message })
  }
}
