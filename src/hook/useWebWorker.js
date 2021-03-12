import { useRef, useState, useEffect, useCallback } from 'react'
import Worker from './generic.worker.js'
import { stringify } from 'json-fn'
import { normalizeEvent } from './utils'
import { badType } from './errors'

const isSupported = () => {
  return typeof window === 'undefined' || !window.Worker
}

const useWebWorker = cb => {
  const memoCb = useCallback(() => cb, [])

  const workerRef = useRef()
  const [state, setState] = useState('unregistered')
  const [exec, setExec] = useState(() =>
    console.info('cb is not yet registered')
  )

  useEffect(() => {
    if (isSupported()) return

    let { current: worker } = workerRef

    worker = new Worker()

    worker.postMessage({
      type: 'INIT',
      cb: stringify(cb),
    })
    setState('pending')

    worker.onmessage = $event => {
      const { type, cb } = normalizeEvent($event)

      switch (type) {
        case 'INIT':
          setExec(cb)
          setState('registered')
          break
        default:
          badType(type)
      }
    }
  }, [memoCb])

  return { state, exec }
}

export default useWebWorker
