import { useRef, useState, useEffect } from 'react'
import Worker from './generic.worker.js'
import { stringify } from 'json-fn'
import { isOK, isPending } from './utils'
import { badType } from './errors'

const isSupported = () => {
  return typeof window === 'undefined' || !window.Worker
}

const useAnotherThread = (
  cb,
  args,
  { autokill = true, stopwatch = false } = {}
) => {
  const cbRef = useRef()
  const argsRef = useRef()
  useEffect(() => {
    // TODO register on mount cb and args in refs as singleton?
    if (!cbRef.current) cbRef.current = cb
    if (args && !argsRef.current) argsRef.current = args
  }, [cb, args])

  args = Array.isArray(args) ? parseInt(args) : [parseInt(args)]

  const workerRef = useRef()
  const [state, setState] = useState('unregistered')
  const [exec, setExec] = useState(() => () =>
    console.info('cb is not yet registered')
  )
  const [output, setOutput] = useState()
  const [kill, setKill] = useState()

  const sendMessage = (worker, config) => {
    worker.postMessage(config)
  }

  const isExecutable = ['registered', 'ready'].includes(state)
  const isKillable = ['registered', 'pending', 'ready'].includes(state)

  let cbWorkAround = cbRef.current,
    argsWorkAround = argsRef.current
  useEffect(() => {
    if (isSupported()) return

    workerRef.current = new Worker()

    let worker = workerRef.current

    worker = new Worker()

    let cb = cbRef.current
    let args = argsRef.current

    worker.postMessage({
      type: 'INIT',
      cb: stringify(cb),
      args,
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
                setExec(() => () =>
                  sendMessage(that, { type: 'EXEC', stopwatch })
                )
                setState('registered')
                break
              case 'EXEC':
                setOutput(output)
                if (autokill) {
                  that.terminate()
                  setState('killed')
                } else {
                  setState('ready')
                }
                break
              default:
                badType(type)
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

    return () => {
      worker.terminate()
    }
  }, [cbWorkAround, argsWorkAround, autokill, stopwatch])

  return { state, exec, output, kill, isExecutable, isKillable }
}

export default useAnotherThread
