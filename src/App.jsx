import { useState, useEffect } from 'react'

import SingleThreadContext from './SingleThreadContext'
import Code from './Code'
import MultiThreadContext from './MultiThreadContext'
import Balls from './balls/Balls'
// import Explanation from './Explanation'
import IterationsAmountPicker from './IterationsAmountPicker'
import UseHookCheckbox from './UseHookCheckbox'
import Alert from './Alert'

const maxAmount = 10000000000
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
            {/* <Explanation /> */}
            <IterationsAmountPicker
              iterationsAmount={iterationsAmount}
              onMinusHandler={onMinusHandler}
              onPlusHandler={onPlusHandler}
              isUsingHook={isUsingHook}
            />
            {showAlert && <Alert iterationsAmount={iterationsAmount} />}
            <UseHookCheckbox
              isUsingHook={isUsingHook}
              onChangeHandler={onChangeHandler}
            />
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
