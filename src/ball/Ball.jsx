import React from 'react'
import './ball.css'

function Ball() {
  return (
    <div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(index => (
        <div
          className={`ball ball-${index}`}
          key={index}
          style={{ animationDelay: 0.3 * index + 's' }}
        />
      ))}
    </div>
  )
}

export default Ball
