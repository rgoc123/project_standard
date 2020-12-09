import { RECEIVE_REVIEW_ITEMS } from '../actions/reviewItemActions'

const reviewItemReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_REVIEW_ITEMS:
      const reviewItems = action.reviewItems
      return [ ...reviewItems ]
    default:
      return state
  }
}

export default reviewItemReducer
