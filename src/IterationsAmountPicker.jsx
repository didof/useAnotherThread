import React from 'react'

const IterationsAmountPicker = ({
  iterationsAmount,
  onMinusHandler,
  onPlusHandler,
  isUsingHook,
}) => {
  return (
    <div className='content'>
      <h2 htmlFor='iterations-amount' className='subtitle is-6'>
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
            disabled={isUsingHook || iterationsAmount === 10000000000}
          >
            +
          </button>
        </p>
      </div>
    </div>
  )
}

export default IterationsAmountPicker
