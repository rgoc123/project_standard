import * as ReviewItemAPI from '../util/reviewItemAPIUtil'

export const RECEIVE_REVIEW_ITEMS = 'RECEIVE_REVIEW_ITEMS'

export const receiveReviewItems = reviewItems => {
  return {
    type: RECEIVE_REVIEW_ITEMS,
    reviewItems
  }
}

export const getReviewItems = () => async dispatch => {
  try {
    const reviewItemsRes = await ReviewItemAPI.getReviewItems()
    dispatch(receiveReviewItems(reviewItemsRes.data))
  } catch (err) {
    console.log(err)
  }
}
