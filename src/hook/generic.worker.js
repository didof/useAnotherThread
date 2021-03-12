import { normalizeEvent } from './utils'
import { badType } from './errors'
import { stringify } from 'json-fn'

let callback

onmessage = function ($event) {
  const { type, cb } = normalizeEvent($event)

  const exec = () => {
    return () => {
      callback()
    }
  }

  switch (type) {
    case 'INIT':
      callback = cb
      postMessage({ type: 'INFO', subject: 'INIT', status: 'OK' })
      break
    case 'EXEC':
      callback()
      break
    default:
      badType(type)
  }
}
