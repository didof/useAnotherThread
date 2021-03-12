import { useRef, useState, useEffect, useCallback } from 'react'
import Worker from './generic.worker.js'
import { stringify } from 'json-fn'
import { isOK } from './utils'
import { badType } from './errors'

const isSupported = () => {
  return typeof window === 'undefined' || !window.Worker
}

const useWebWorker = cb => {
  const memoCb = useCallback(() => cb, [])

  const workerRef = useRef()
  const [state, setState] = useState('unregistered')
  const [exec, setExec] = useState(() => () =>
    console.info('cb is not yet registered')
  )
  const [output, setOutput] = useState()

  const sendMessage = (worker, config) => {
    worker.postMessage(config)
  }

  useEffect(() => {
    if (isSupported()) return

    let worker = workerRef.current

    worker = new Worker()

    worker.postMessage({
      type: 'INIT',
      cb: stringify(cb),
    })
    setState('pending')

    worker.onmessage = function ($event) {
      const that = this

      const { type, subject, output } = $event.data

      switch (type) {
        case 'INFO':
          if (isOK($event)) {
            switch (subject) {
              case 'INIT':
                setExec(() => () => sendMessage(that, { type: 'EXEC' }))
                setState('registered')
                break
              case 'EXEC':
                setOutput(output)
            }
          } else {
            setState('broken')
          }

          break
        default:
          badType(type)
      }
    }
  }, [memoCb])

  return { state, exec, output }
}

export default useWebWorker
