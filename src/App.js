import useWebWorker from './hook/useWebWorker'

const App = () => {
  const greet = () => console.log('Hello World!')

  const { state, exec } = useWebWorker(greet)

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={exec}>Exec</button>
    </div>
  )
}

export default App
