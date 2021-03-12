import useWebWorker from './hook/useWebWorker'

const App = () => {
  const greet = () => console.log('Hello World!')

  useWebWorker(greet)

  return <div></div>
}

export default App
