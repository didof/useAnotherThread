import useAnotherThread from './hook/useAnotherThread'
import SingleThreadContext from './SingleThreadContext'
import Ball from './Ball'

const App = () => {
  const heavyJob = (end = 1000000000) => {
    let a = 0
    for (let i = 0; i < end; i++) {
      a += i
    }
    return a
  }

  const { state, exec, output, kill, isNotReady } = useAnotherThread(
    heavyJob,
    undefined,
    {
      stopwatch: true,
      autokill: false,
    }
  )

  return (
    <div>
      <h1>Web Worker state: {state}</h1>
      <button onClick={exec}>Exec</button>
      <button onClick={kill} disabled={isNotReady}>
        Kill
      </button>
      <h2 id='output'>Output: {output || ''}</h2>
      <hr />
      <SingleThreadContext />
      <hr />
      <Ball />
    </div>
  )
}

export default App
