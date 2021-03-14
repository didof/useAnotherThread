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
      <div className='field has-addons is-flex is-align-content-center is-justify-content-center'>
        <p className='control'>
          <button
            className='button'
            onClick={onMinusHandler}
            disabled={isUsingHook || iterationsAmount === 100}
          >
            -
          </button>
        </p>
        <p className='control'>
          <button className='button is-fullwidth' disabled>
            {iterationsAmount}
          </button>
        </p>
        <p className='control'>
          <button
            className='button'
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
