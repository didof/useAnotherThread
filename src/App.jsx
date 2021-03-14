import { useState, useEffect } from 'react'

import {
  Alert,
  Code,
  Explanation,
  IterationsAmountPicker,
  UseHookCheckbox,
} from './demo-utils'

import SingleThreadContext from './SingleThreadContext'
import MultiThreadContext from './MultiThreadContext'
import Balls from './balls/Balls'

const maxAmount = 1000000000
const alertAmount = 10000000

const App = () => {
  const [iterationsAmount, setIterationsAmount] = useState(maxAmount)
  const [isUsingHook, setIsUsingHook] = useState(true)
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    setShowAlert(!isUsingHook && iterationsAmount >= alertAmount)
  }, [isUsingHook, iterationsAmount])

  const onMinusHandler = () => {
    if (iterationsAmount > 100)
      setIterationsAmount(prevAmount => prevAmount / 10)
  }

  const onPlusHandler = () => {
    if (iterationsAmount < maxAmount)
      setIterationsAmount(prevAmount => prevAmount * 10)
  }

  const onChangeHandler = event => {
    const { checked } = event.target
    if (checked) setIterationsAmount(maxAmount)
    setIsUsingHook(checked)
  }

  return (
    <div className='container'>
      <div className='columns is-centered'>
        <div className='column is-full-tablet is-two-fifths'>
          <div className='section'>
            <Explanation isUsingHook={isUsingHook} />
            <UseHookCheckbox
              isUsingHook={isUsingHook}
              onChangeHandler={onChangeHandler}
            />
            <IterationsAmountPicker
              iterationsAmount={iterationsAmount}
              onMinusHandler={onMinusHandler}
              onPlusHandler={onPlusHandler}
              isUsingHook={isUsingHook}
              maxAmount={maxAmount}
            />
            {showAlert && <Alert iterationsAmount={iterationsAmount} />}

            <Code
              isUsingHook={isUsingHook}
              iterationsAmount={iterationsAmount}
            />
          </div>
        </div>
        <div className='column'>
          {isUsingHook ? (
            <MultiThreadContext iterationsAmount={maxAmount} />
          ) : (
            <SingleThreadContext iterationsAmount={iterationsAmount} />
          )}
          <Balls />
        </div>
      </div>
    </div>
  )
}

export default App
