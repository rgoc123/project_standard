import React, { useState } from 'react'

import { createReviewItem } from '../util/reviewItemAPIUtil'

export default function CreateItemForm() {
  const [item, updateItem] = useState('')
  const [createIsOpen, toggleCreateOpen] = useState(false)

  return (
    <div className="create-item-form-cont">
      <h4>Create Item</h4>

      <button className="open-close"
        onClick={() => toggleCreateOpen(!createIsOpen)}>
        {createIsOpen ? '-' : '+'}
      </button>

      <form className={createIsOpen ? 'open' : 'closed' }
        onSubmit={() => createReviewItem(item)}>
        <input
          onChange={(e) => updateItem(e.currentTarget.value)}
          placeholder="Item" />
        <button>Add</button>
      </form>

    </div>
  )
}
