import { parse } from 'json-fn'
import { badKey } from './errors'

export const normalizeEvent = $event => {
  return Object.keys($event.data).reduce((accumulator, key) => {
    switch (key) {
      case 'type':
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
