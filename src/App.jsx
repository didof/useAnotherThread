import { useState } from 'react'
import SingleThreadContext from './SingleThreadContext'
import Code from './Code'
import MultiThreadContext from './MultiThreadContext'
import Balls from './balls/Balls'
import Explanation from './Explanation'

const App = () => {
  const [iterationsAmount, setiterationsAmount] = useState(1000000)
  const [isUsingHook, setIsUsingHook] = useState(true)

  return (
    <div className='container'>
      <div className='columns'>
        <div className='column is-full-tablet is-two-fifths'>
          <Explanation />
          <div className='section'>
            <label htmlFor='iterations-amount' className='subtitle is-6'>
              Iterations Amount
            </label>
            <input
              id='iterations-amount'
              className='input is-primary'
              type='number'
              placeholder='Take some big num!'
              min='100'
              max={isUsingHook ? '1000000000000' : '100000'}
              value={iterationsAmount}
              onChange={event => setiterationsAmount(event.target.value)}
            />
            <br />
            <br />
            <label className='checkbox'>
              <input
                type='checkbox'
                checked={isUsingHook}
                onChange={event => setIsUsingHook(event.target.checked)}
              />{' '}
              useAnotherThread
            </label>
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
