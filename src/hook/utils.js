import { parse } from 'json-fn'
import { badKey } from './errors'

export const normalizeEvent = $event => {
  return Object.keys($event.data).reduce((accumulator, key) => {
    switch (key) {
      case 'type':
      case 'subject':
      case 'status':
      case 'args':
      case 'stopwatch':
        accumulator[key] = $event.data[key]
        break
      case 'cb':
        accumulator[key] = parse($event.data[key])
        break
      default:
        badKey(key)
    }
    return accumulator
  }, {})
}

export const isOK = $event => {
  const { subject, status, elapsed } = $event.data
  let color = status === 'OK' ? 'info' : 'warn'
  if (status === 'OK') {
    console[color](`[isOK] The message ${subject} has a status of ${status}`)
    console.info(elapsed || '')
    return true
  }
  return false
}

export const isPending = $event => {
  const { subject, status } = $event.data
  if (status !== 'PENDING') return false
  console.info(`[isPending] The cb is beeing computed in the web worker`)
  return true
}
