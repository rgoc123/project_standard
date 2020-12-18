import React, { useState } from 'react'

import { createReviewItem } from '../util/reviewItemAPIUtil'

export default function CreateItemForm() {
  const [item, updateItem] = useState('')
  const [createIsOpen, toggleCreateOpen] = useState(false)

  return (
    <div className="create-item-form">
      <h4>Create Item</h4>

      <button onClick={() => toggleCreateOpen(!createIsOpen)}>
        {createIsOpen ? '-' : '+'}
      </button>

      <form onSubmit={() => createReviewItem(item)}>
        <input className={createIsOpen ? 'open' : 'closed' }
          onChange={(e) => updateItem(e.currentTarget.value)}
          placeholder="Item" />
      </form>

    </div>
  )
}
