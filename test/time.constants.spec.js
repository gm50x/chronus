const { strictEqual } = require('assert')
const {
  ONE_SECOND_MS,
  ONE_MINUTE_MS,
  ONE_HOUR_MS,
  ONE_DAY_MS
} = require('../src')

const subject = 'Times Constants'

describe(`${subject} Specs`, () => {
  it(`ONE_SECOND_MS should represent the proper time in milliseconds`, () => {
    const expected = 1000
    const actual = ONE_SECOND_MS
    strictEqual(expected, actual)
  })

  it(`ONE_MINUTE_MS should represent one minute time in milliseconds`, () => {
    const expected = 1000 * 60
    const actual = ONE_MINUTE_MS
    strictEqual(expected, actual)
  })

  it(`ONE_HOUR_MS should represent one hour time in milliseconds`, () => {
    const expected = 1000 * 60 * 60
    const actual = ONE_HOUR_MS
    strictEqual(expected, actual)
  })

  it(`ONE_DAY_MS should represent one day time in milliseconds`, () => {
    const expected = 1000 * 60 * 60 * 24
    const actual = ONE_DAY_MS
    strictEqual(expected, actual)
  })
})