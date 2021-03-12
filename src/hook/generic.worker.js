import { normalizeEvent } from './utils'
import { badType } from './errors'

let callback
let argumentz

onmessage = function ($event) {
  const { type, cb, args, stopwatch } = normalizeEvent($event)

  switch (type) {
    case 'INIT':
      callback = cb
      argumentz = args
      postMessage({ type: 'INFO', subject: 'INIT', status: 'OK' })
      break
    case 'EXEC':
      postMessage({ type: 'INFO', subject: 'EXEC', status: 'PENDING' })
      let t0, elapsed
      if (stopwatch) t0 = performance.now()
      const output = callback(...argumentz)
      if (stopwatch) {
        elapsed = performance.now() - t0
        console.info(elapsed)
      }
      postMessage({
        type: 'INFO',
        subject: 'EXEC',
        status: 'OK',
        output,
      })
      break
    default:
      badType(type)
  }
}
