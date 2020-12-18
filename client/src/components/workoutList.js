import React, { useState } from 'react'

export default function WorkoutList({ activeTab }) {
  const [workoutItems, setWorkoutItems] = useState([])

  return (
    <div className="workout-list">
      <h4>Workout List</h4>
    </div>
  )
}
