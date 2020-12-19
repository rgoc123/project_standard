import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getReviewItems } from '../actions/reviewItemActions'

export default function ReviewList(props) {
  const reviewItems = useSelector(state => state.reviewItems)
  const dispatch = useDispatch()

  useEffect(() => { dispatch(getReviewItems()) }, [])

  return (
    <div className="review-list">
      <h4>Review List</h4>

      {reviewItems.map(item => {
        return (
          <div className="review-item" key={item.uuid}>
            <p>{item.title}</p>
          </div>
        )
      })}
    </div>
  )
}
