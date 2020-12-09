import React, { useState } from 'react'

function ReviewList() {
  const [reviewItems, setReviewItems] = useState([
    { title: 'Combo Sum II no-sort', uuid: '1234' }
  ])

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

export default ReviewList
