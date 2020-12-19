import * as ReviewItemAPI from '../util/reviewItemAPIUtil'

export const RECEIVE_REVIEW_ITEMS = 'RECEIVE_REVIEW_ITEMS'
export const CREATE_REVIEW_ITEM = 'CREATE_REVIEW_ITEM'

export const receiveReviewItems = reviewItems => {
  return {
    type: RECEIVE_REVIEW_ITEMS,
    reviewItems
  }
}

export const addNewReviewItem = reviewItem => {
  return {
    type: CREATE_REVIEW_ITEM,
    reviewItem
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

export const createReviewItem = item => async dispatch => {
  try {
    const reviewItem = await ReviewItemAPI.createReviewItem(item)
    dispatch(addNewReviewItem(reviewItem))
  } catch (err) {
    console.log(err)
  }
}
