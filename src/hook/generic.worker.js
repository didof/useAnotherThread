import { normalizeEvent } from './utils'
import { badType } from './errors'
import { stringify } from 'json-fn'

let callback

onmessage = function ($event) {
  const { type, cb } = normalizeEvent($event)

  const exec = () => {
    return () => {
      console.log('EXECUTE')
    }
  }

  switch (type) {
    case 'INIT':
      callback = cb
      postMessage({ type: 'INIT', cb: stringify(exec) })
      break
    default:
      badType(type)
  }
}
