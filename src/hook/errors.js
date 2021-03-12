export const badType = cause => {
  throw new Error(`[onmessage] The type ${cause} is not supported`)
}

export const badKey = cause => {
  throw new Error(`[extractWithCheck] The key ${cause} is not supported`)
}
