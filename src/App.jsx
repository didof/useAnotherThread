import SingleThreadContext from './SingleThreadContext'
import MultiThreadContext from './MultiThreadContext'
import Ball from './ball/Ball'

const App = () => {
  return (
    <div>
      <hr />
      <SingleThreadContext />
      <MultiThreadContext />
      <hr />
      <Ball />
    </div>
  )
}

export default App
