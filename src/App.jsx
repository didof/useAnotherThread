import SingleThreadContext from './SingleThreadContext'
import MultiThreadContext from './MultiThreadContext'
import Balls from './balls/Balls'

const App = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <SingleThreadContext />
        <MultiThreadContext />
      </div>
      <Balls />
    </>
  )
}

export default App
