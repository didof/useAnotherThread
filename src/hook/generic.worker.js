import { normalizeEvent } from './utils'
import { badType } from './errors'
import { stringify } from 'json-fn'

let callback
let argumentz

onmessage = function ($event) {
  let t0, elapsed
  const { type, cb, args, stopwatch } = normalizeEvent($event)

  switch (type) {
    case 'INIT':
      callback = cb
      argumentz = args
      postMessage({ type: 'INFO', subject: 'INIT', status: 'OK' })
      break
    case 'EXEC':
      postMessage({ type: 'INFO', subject: 'EXEC', status: 'PENDING' })
      if (stopwatch) t0 = performance.now()
      const output = callback(...argumentz)
      elapsed = performance.now() - t0
      postMessage({
        type: 'INFO',
        subject: 'EXEC',
        status: 'OK',
        output,
        elapsed,
      })
      break
    default:
      badType(type)
  }
}
