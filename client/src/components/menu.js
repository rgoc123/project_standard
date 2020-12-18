import React from 'react'

export default function Menu({ activeTab, setActiveTab }) {
  return (
    <div>
      <button onClick={() => setActiveTab('learn')}>Learn</button>
      <button onClick={() => setActiveTab('cook')}>Cook</button>
      <button onClick={() => setActiveTab('workout')}>Workout</button>
      <button onClick={() => setActiveTab('watchLearn')}>Watch/List</button>
    </div>
  )
}
