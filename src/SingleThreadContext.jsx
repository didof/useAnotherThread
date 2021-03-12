import { useState } from 'react'

const SingleThreadContext = () => {
  const [output, setOutput] = useState()

  const heavyJob = (end = 1000000000) => {
    let a = 0
    for (let i = 0; i < end; i++) {
      a += i
    }
    setOutput(a)
  }

  return (
    <div>
      <h1>Single-thread context</h1>
      <button onClick={() => heavyJob()}>Exec</button>
      <h2 id='output'>Output: {output || ''}</h2>
    </div>
  )
}

export default SingleThreadContext
