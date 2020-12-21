import { RECEIVE_REVIEW_ITEMS, CREATE_REVIEW_ITEM } from '../actions/reviewItemActions'

const reviewItemReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_REVIEW_ITEMS:
      const reviewItems = action.reviewItems
      return [ ...reviewItems ]
    case CREATE_REVIEW_ITEM:
      const newReviewItem = action.reviewItem
      return [ ...state, newReviewItem ]
    default:
      return state
  }
}

export default reviewItemReducer
