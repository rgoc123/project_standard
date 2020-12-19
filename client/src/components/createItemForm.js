import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createReviewItem } from '../actions/reviewItemActions'

export default function CreateItemForm() {
  const [item, updateItem] = useState('')
  const [createIsOpen, toggleCreateOpen] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className="create-item-form-cont">
      <h4>Create Item</h4>

      <button className="open-close"
        onClick={() => toggleCreateOpen(!createIsOpen)}>
        {createIsOpen ? '-' : '+'}
      </button>

      <form className={createIsOpen ? 'open' : 'closed' }
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(createReviewItem(item))
          updateItem('')
        }}>
        <input
          onChange={(e) => updateItem(e.currentTarget.value)}
          value={item}
          placeholder="Item" />
        <button>Add</button>
      </form>

    </div>
  )
}
