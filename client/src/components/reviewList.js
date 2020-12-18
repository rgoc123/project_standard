import React, { useState, useEffect } from 'react'

function ReviewList() {
  const [reviewItems, setReviewItems] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch('http://localhost:7001/v1/reviewItems');
      const resJSON = await res.json();

      console.log(resJSON)
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

export default ReviewList
