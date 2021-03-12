import useAnotherThread from './hook/useAnotherThread'

const MultiThreadContext = () => {
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
      <h1>Web Worker: {state}</h1>
      <button onClick={exec}>Exec</button>
      <button onClick={kill} disabled={isNotReady}>
        Kill
      </button>
      <h2 id='output'>Output: {output || ''}</h2>
    </div>
  )
}

export default MultiThreadContext
