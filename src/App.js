import useWebWorker from './hook/useWebWorker'

const App = () => {
  const heavyJob = end => {
    let a = 0
    for (let i = 0; i < end; i++) {
      a += i
    }
    return a
  }

  const { state, exec, output, kill, isKillable } = useWebWorker(heavyJob, [
    100000000,
  ])

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={exec}>Exec</button>
      <button onClick={kill} disabled={isKillable()}>
        Kill
      </button>
      <h2 id='output'>Output: {output || ''}</h2>
    </div>
  )
}

export default App
