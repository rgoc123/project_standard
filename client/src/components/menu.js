import React from 'react'

export default function Menu({ activeTab, setActiveTab }) {
  const getStyle = (tab) => activeTab === tab ? 'active' : 'inactive'

  return (
    <div>
      {['learn', 'cook', 'workout', 'watch'].map(tab => (
        <button className={getStyle(tab)}
          onClick={() => setActiveTab(tab)}
          key={tab} >
          {tab[0].toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  )
}
