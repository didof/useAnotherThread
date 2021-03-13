import React from 'react'

const UseHookCheckbox = ({ isUsingHook, onChangeHandler }) => {
  return (
    <label className='checkbox'>
      <input type='checkbox' checked={isUsingHook} onChange={onChangeHandler} />{' '}
      useAnotherThread
    </label>
  )
}

export default UseHookCheckbox
