import React, { useState, useEffect } from 'react'

function ReviewList() {
  const [reviewItems, setReviewItems] = useState([
    { title: 'Combo Sum II no-sort', uuid: '1234' }
  ])

  useEffect(() => {
    async function getData() {
      const preJSONifiedRes = await fetch('http://localhost:7001/v1/reviewItems');
      const res = await preJSONifiedRes.json();

      console.log(res)
      setReviewItems(res.data)
    }

    getData()
  })

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
