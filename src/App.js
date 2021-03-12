import useWebWorker from './hook/useWebWorker'

const App = () => {
  const greet = () => console.log('Hello World!')

  const giveOutput = () => {
    return 5
  }

  const sum = (x, y) => x + y

  const heavyJob = () => {
    let a = 0
    for (let i = 0; i < 100000000; i++) {
      a += i
    }
    console.log(a)
  }

  const { state, exec, output, kill } = useWebWorker(sum, [1, 2])

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={exec}>Exec</button>
      <button onClick={kill}>Kill</button>
      <h2 id='output'>Output: {output || ''}</h2>
    </div>
  )
}

export default App
