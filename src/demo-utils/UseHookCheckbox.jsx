import React from 'react'

const UseHookCheckbox = ({ isUsingHook, onChangeHandler }) => {
  return (
    <label className='checkbox box is-flex is-justify-content-center is-align-content-center'>
      <span>
        <input
          type='checkbox'
          checked={isUsingHook}
          onChange={onChangeHandler}
        />{' '}
        useAnotherThread
      </span>
    </label>
  )
}

export default UseHookCheckbox
