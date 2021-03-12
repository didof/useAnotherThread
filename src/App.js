import useWebWorker from './hook/useWebWorker'

const App = () => {
  const greet = () => console.log('Hello World!')

  const heavyJob = () => {
    let a = 0
    for (let i = 0; i < 100; i++) {
      a += i
    }
    console.log(a)
  }

  const { state, exec } = useWebWorker(greet)

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={exec}>Exec</button>
    </div>
  )
}

export default App
