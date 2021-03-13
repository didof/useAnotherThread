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

  return (
    <div className='section'>
      <div className='columns'>
        <h1 className='column is-full-mobile'>Single-thread context</h1>
        <div className='column'>
          <button
            className='button is-primary is-rounded'
            onClick={() => heavyJob(iterationsAmount)}
          >
            Exec
          </button>
        </div>
      </div>
      <div className='columns'>
        <h2 className='column' id='output'>
          Output:
        </h2>
        <p className='column'>{output || ''}</p>
      </div>
    </div>
  )
}

export default SingleThreadContext
