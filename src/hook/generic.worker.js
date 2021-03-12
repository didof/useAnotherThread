import { normalizeEvent } from './utils'
import { badType } from './errors'
import { stringify } from 'json-fn'

let callback
let argumentz

onmessage = function ($event) {
  const { type, cb, args } = normalizeEvent($event)

  switch (type) {
    case 'INIT':
      callback = cb
      argumentz = args
      postMessage({ type: 'INFO', subject: 'INIT', status: 'OK' })
      break
    case 'EXEC':
      postMessage({ type: 'INFO', subject: 'EXEC', status: 'PENDING' })
      const output = callback(...argumentz)
      postMessage({ type: 'INFO', subject: 'EXEC', status: 'OK', output })
      break
    default:
      badType(type)
  }
}
