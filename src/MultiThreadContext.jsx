import useAnotherThread from './hook/useAnotherThread'
import { toLiteral } from './utils'

const MultiThreadContext = ({ iterationsAmount }) => {
  const heavyJob = end => {
    let a = 0
    for (let i = 0; i < end; i++) {
      a += i
    }
    return a
  }

  const {
    state,
    exec,
    output,
    kill,
    isExecutable,
    isKillable,
  } = useAnotherThread(heavyJob, iterationsAmount, {
    stopwatch: true,
    autokill: false,
  })

  const tagColor = {
    unregistered: 'is-light',
    registered: 'is-primary',
    pending: 'is-info',
    broken: 'is-danger',
    killed: 'is-dark',
  }

  return (
    <div className='section'>
      <div className='columns'>
        <div className='column box is-flex is-flex is-flex-direction-column'>
          <span className='is-flex is-justify-content-space-between'>
            <span>Web Worker state</span>
            <span className={`tag ${tagColor[state]}`}>{state}</span>
          </span>
          <br />
          <span className='is-flex is-justify-content-space-between'>
            <span>Number of iterations</span>
            <span className='tag is-light'>{toLiteral(iterationsAmount)}</span>
          </span>
        </div>
        <div className='column is-flex is-justify-content-center is-align-content-center'>
          <div className='field has-addons'>
            <p className='control'>
              <button
                className={`button is-primary is-rounded ${
                  state === 'pending' ? 'is-loading' : ''
                }`}
                onClick={exec}
                disabled={!isExecutable}
              >
                Exec
              </button>
            </p>
            <p className='control'>
              <button
                className='button is-danger is-rounded'
                onClick={kill}
                disabled={!isKillable}
              >
                Kill
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className='box is-flex is-justify-content-flex-start tag is-dark'>
        <span style={{ marginRight: 5 }}>Output {'>'}</span>
        <div>{output || ''}</div>
      </div>
    </div>
  )
}

export default MultiThreadContext
