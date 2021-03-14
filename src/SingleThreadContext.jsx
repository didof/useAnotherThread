import { useState } from 'react'

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
        <h1 className='column is-full-mobile'>Single-thread context</h1>
        <div className='column'>
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
      <div className='box is-flex is-justify-content-space-around is-align-content-center columns'>
        <p className='column' id='output'>
          Output:
        </p>
        <p className='column'>{output || ''}</p>
      </div>
    </div>
  )
}

export default SingleThreadContext
