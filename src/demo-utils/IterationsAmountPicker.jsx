import React from 'react'

const IterationsAmountPicker = ({
  iterationsAmount,
  onMinusHandler,
  onPlusHandler,
  isUsingHook,
  maxAmount,
}) => {
  return (
    <div className='content box'>
      <h2 htmlFor='iterations-amount' className='subtitle'>
        Iterations Amount
      </h2>
      <div className='field has-addons'>
        <p className='control'>
          <button
            className='button is-large'
            onClick={onMinusHandler}
            disabled={isUsingHook || iterationsAmount === 100}
          >
            -
          </button>
        </p>
        <p className='control'>
          <button className='button is-large is-fullwidth' disabled>
            {iterationsAmount}
          </button>
        </p>
        <p className='control'>
          <button
            className='button is-large'
            onClick={onPlusHandler}
            disabled={isUsingHook || iterationsAmount === maxAmount}
          >
            +
          </button>
        </p>
      </div>
    </div>
  )
}

export default IterationsAmountPicker
