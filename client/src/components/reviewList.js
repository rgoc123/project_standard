import React, { useState, useEffect } from 'react'

import { getReviewItems } from '../util/reviewItemAPIUtil'

export default function ReviewList() {
  const [reviewItems, setReviewItems] = useState([])

  useEffect(() => {
    async function getData() {
      const resJSON = await getReviewItems()
      setReviewItems(resJSON.data)
    }

    getData()
  }, [])

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
