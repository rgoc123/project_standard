import React, { useState } from 'react'

export default function CookList({ activeTab }) {
  const [cookItems, setCookItems] = useState([])

  return (
    <div className="cook-list">
      <h4>Cook List</h4>
    </div>
  )
}
