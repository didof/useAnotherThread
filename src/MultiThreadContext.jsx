import useAnotherThread from './hook/useAnotherThread'

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
      <h1 className='column is-full-mobile'>
        Web Worker state{' '}
        <span className={`tag ${tagColor[state]}`}>{state}</span>
      </h1>
      <div className='buttons'>
        <button
          className={`button is-primary is-rounded ${
            state === 'pending' ? 'is-loading' : ''
          }`}
          onClick={exec}
          disabled={!isExecutable}
        >
          Exec
        </button>
        <button
          className='button is-danger is-rounded'
          onClick={kill}
          disabled={!isKillable}
        >
          Kill
        </button>
      </div>
      <div className='columns'>
        <h2 className='column' id='output'>
          Output:
        </h2>
        <p className='column'>{output || ''}</p>
      </div>
    </div>
  )
}

export default MultiThreadContext
