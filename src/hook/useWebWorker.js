import { useEffect } from 'react'
import { parse, stringify } from 'json-fn'

const isSupported = () => {
  return typeof window === 'undefined' || !window.Worker
}

const useWebWorker = cb => {
  useEffect(() => {
    if (isSupported()) return

    const worker = new Worker('/genericWorker.js')

    worker.postMessage({
      type: 'INIT',
      payload: stringify(cb),
    })
  }, [cb])
}

export const JSONfnParse = parse

export default useWebWorker
