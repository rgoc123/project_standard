import React, { useState } from 'react'

export default function CreateItemForm() {
  const [item, updateItem] = useState('')
  const [createIsOpen, toggleCreateOpen] = useState(false)

  return (
    <div className="create-item-form">
      <h4>Create Item</h4>
      
      <button onClick={() => toggleCreateOpen(!createIsOpen)}>
        {createIsOpen ? '-' : '+'}
      </button>

      <input style={{ display: createIsOpen ? 'block' : 'none' }} placeholder="Item" />
    </div>
  )
}
