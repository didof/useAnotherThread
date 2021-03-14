import { useState } from 'react'
import { toLiteral } from './utils'

const SingleThreadContext = ({ iterationsAmount = 1000000000 }) => {
  const [output, setOutput] = useState()

  const heavyJob = end => {
    let a = 0
    for (let i = 0; i < end; i++) {
      a += i
    }
    setOutput(a)
  }

  const isNotAllowed = iterationsAmount > 10000000000

  return (
    <div className='section'>
      <div className='columns'>
        <div className='column box is-flex is-flex is-flex-direction-column'>
          <span>Single-thread context</span>
          <br />
          <span className='is-flex is-justify-content-space-between'>
            <span>Number of iterations</span>
            <span className='tag is-light'>{toLiteral(iterationsAmount)}</span>
          </span>
        </div>
        <div className='column is-flex is-justify-content-center is-align-content-center'>
          <button
            className={`button ${
              isNotAllowed ? 'is-danger' : 'is-primary'
            } is-rounded`}
            onClick={() => heavyJob(iterationsAmount)}
            disabled={isNotAllowed}
          >
            {isNotAllowed ? 'Nope' : 'Exec'}
          </button>
        </div>
      </div>
      <div className='box is-flex is-justify-content-flex-start tag is-dark'>
        <span style={{ marginRight: 5, color: 'lightgreen' }}>
          Output {'>'}
        </span>
        <div style={{ color: 'lightgreen' }}>{output || ''}</div>
      </div>
    </div>
  )
}

export default SingleThreadContext
