import { useState } from 'react'
import SingleThreadContext from './SingleThreadContext'
import Code from './Code'
import MultiThreadContext from './MultiThreadContext'
import Balls from './balls/Balls'
// import Explanation from './Explanation'
import IterationsAmountPicker from './IterationsAmountPicker'
import UseHookCheckbox from './UseHookCheckbox'
import Alert from './Alert'

const App = () => {
  const [iterationsAmount, setIterationsAmount] = useState(1000000)
  const [isUsingHook, setIsUsingHook] = useState(true)
  const [showAlert, setShowAlert] = useState(false)

  const onMinusHandler = () => {
    if (iterationsAmount > 100) setShowAlert(false)
    setIterationsAmount(prevAmount => prevAmount / 10)
  }

  const onPlusHandler = () => {
    if (isUsingHook && iterationsAmount === 1000000) {
      setShowAlert(true)
    }
    setIterationsAmount(prevAmount => prevAmount * 10)
  }

  const onChangeHandler = event => {
    const { checked } = event.target
    setIsUsingHook(checked)
  }

  return (
    <div className='container'>
      <div className='columns'>
        <div className='column is-full-tablet is-two-fifths'>
          <div className='section'>
            {/* <Explanation /> */}
            <IterationsAmountPicker
              iterationsAmount={iterationsAmount}
              onMinusHandler={onMinusHandler}
              onPlusHandler={onPlusHandler}
            />
            {showAlert && <Alert />}
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
            <MultiThreadContext iterationsAmount={iterationsAmount} />
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
