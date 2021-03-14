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
            className='button is-small'
            onClick={onMinusHandler}
            disabled={isUsingHook || iterationsAmount === 100}
          >
            -
          </button>
        </p>
        <p className='control'>
          <button className='button is-small is-fullwidth' disabled>
            {iterationsAmount}
          </button>
        </p>
        <p className='control'>
          <button
            className='button is-small'
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
