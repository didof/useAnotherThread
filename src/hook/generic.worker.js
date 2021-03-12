import { normalizeEvent } from './utils'
import { badType } from './errors'
import { stringify } from 'json-fn'

let callback

onmessage = function ($event) {
  const { type, cb } = normalizeEvent($event)

  switch (type) {
    case 'INIT':
      callback = cb
      postMessage({ type: 'INFO', subject: 'INIT', status: 'OK' })
      break
    case 'EXEC':
      const output = callback()
      postMessage({ type: 'INFO', subject: 'EXEC', status: 'OK', output })
      break
    default:
      badType(type)
  }
}
