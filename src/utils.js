export const toLiteral = input => {
  const digits = {
    3: 'hundreds',
    4: 'thousands',
    5: 'ten thousand',
    6: 'one hundred thousand',
    7: 'one million',
    8: 'ten million',
    9: 'one hundred million',
    10: 'one billion',
    11: 'ten billions',
  }

  return digits[input.toString().length]
}
