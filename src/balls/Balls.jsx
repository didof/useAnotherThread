import React from 'react'
import './ball.css'

const Ball = () => (
  <div className='section' style={{ position: 'relative' }}>
    <div style={{ position: 'absolute' }}>
      {new Array(20).fill(null).map((_, index) => (
        <div
          className='ball ball-1'
          key={index}
          style={{
            animationDelay: 0.01 * index + 's',
          }}
        />
      ))}
    </div>
    <div style={{ position: 'absolute' }}>
      {new Array(20).fill(null).map((_, index) => (
        <div
          className='ball ball-2'
          key={index}
          style={{
            animationDelay: 0.01 * index + 's',
          }}
        />
      ))}
    </div>
  </div>
)

export default Ball
