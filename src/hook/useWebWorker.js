import { useRef, useState, useEffect, useCallback } from 'react'
import Worker from './generic.worker.js'
import { stringify } from 'json-fn'
import { isOK, isPending } from './utils'
import { badType } from './errors'

const isSupported = () => {
  return typeof window === 'undefined' || !window.Worker
}

const useWebWorker = (cb, args, stopwatch = false) => {
  const memoCb = useCallback(() => cb, [...args])

  const workerRef = useRef()
  const [state, setState] = useState('unregistered')
  const [exec, setExec] = useState(() => () =>
    console.info('cb is not yet registered')
  )
  const [output, setOutput] = useState()
  const [kill, setKill] = useState(() =>
    console.info('you cannot kill what is not yet born')
  )

  const sendMessage = (worker, config) => {
    worker.postMessage(config)
  }

  const isKillable = () => {
    return state == 'unregistered' || state == 'killed'
  }

  useEffect(() => {
    if (isSupported()) return

    let worker = workerRef.current

    worker = new Worker()

    worker.postMessage({
      type: 'INIT',
      cb: stringify(cb),
      args,
      stopwatch,
    })
    setState('pending')

    setKill(() => () => {
      console.info('worker killed')
      worker.terminate()
      setState('killed')
    })

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
                setState('ready')
            }
          } else if (isPending($event)) {
            setState('pending')
          } else {
            setState('broken')
          }
          break
        default:
          badType(type)
      }
    }
  }, [memoCb])

  return { state, exec, output, kill, isKillable }
}

export default useWebWorker
