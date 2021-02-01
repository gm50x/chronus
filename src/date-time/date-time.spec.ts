import {
  ONE_DAY_MS,
  ONE_SECOND_MS,
  ONE_MINUTE_MS,
  ONE_HOUR_MS,
} from '../time-constants'
import { DateTime } from '.'
import { TimeSpan } from '../time-span'


const subject = DateTime.name

describe(`${subject} Specs`, () => {
  it(`new ${subject} should return an instance of the ${subject} class`, () => {
    expect(new DateTime()).toBeInstanceOf(DateTime)
  })

  it(`${subject}.today should return the representation of today`, () => {
    const ref = new Date()
    const expected = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate()).getTime()
    const actual = DateTime.today.ticks
    expect(actual).toStrictEqual(expected)
  })

  it(`${subject}.now should return the representation of now`, () => {
    const expected = Date.now()
    const actual = DateTime.now.ticks
    const offset = actual - expected
    expect(actual).toStrictEqual(expected + offset)
  })

  it(`${subject}.fromDate should return a ${subject} instance`, () => {
    const actual = DateTime.fromDate(new Date())
    expect(actual).toBeInstanceOf(DateTime)
  })

  it(`${subject}.fromDate should return a ${subject} corresponding to the a given date`, () => {
    const ref = new Date()
    const expected = ref.getTime()
    const actual = DateTime.fromDate(ref).ticks
    expect(actual).toStrictEqual(expected)
  })

  it(`${subject}.fromDate should return a ${subject} corresponding to the a given date`, () => {
    const ref = new Date()
    const expected = ref.getTime()
    const actual = DateTime.fromDate(ref).ticks
    expect(actual).toStrictEqual(expected)
  })

  for (const n of [-15, -10, -5, -2, -1, 0, 1, 2, 5, 10, 15]) {
    it(`${subject}.addMilliseconds(${n}) should return a ${subject} representing the provided date, at the same time of the original date`, () => {
      const ref = new Date()
      const expected = ref.getTime() + n
      const actual = DateTime.fromDate(ref).addMilliseconds(n).ticks
      expect(actual).toStrictEqual(expected)
    })
  }

  for (const n of [-15, -10, -5, -2, -1, 0, 1, 2, 5, 10, 15]) {
    it(`${subject}.addSeconds(${n}) should return a ${subject} representing the provided date, at the same time of the original date`, () => {
      const ref = new Date()
      const expected = ref.getTime() + n * ONE_SECOND_MS
      const actual = DateTime.fromDate(ref).addSeconds(n).ticks
      expect(actual).toStrictEqual(expected)
    })
  }

  for (const n of [-15, -10, -5, -2, -1, 0, 1, 2, 5, 10, 15]) {
    it(`${subject}.addMinutes(${n}) should return a ${subject} representing the provided date, at the same time of the original date`, () => {
      const ref = new Date()
      const expected = ref.getTime() + n * ONE_MINUTE_MS
      const actual = DateTime.fromDate(ref).addMinutes(n).ticks
      expect(actual).toStrictEqual(expected)
    })
  }

  for (const n of [-15, -10, -5, -2, -1, 0, 1, 2, 5, 10, 15]) {
    it(`${subject}.addHours(${n}) should return a ${subject} representing the provided date, at the same time of the original date`, () => {
      const ref = new Date()
      const expected = ref.getTime() + n * ONE_HOUR_MS
      const actual = DateTime.fromDate(ref).addHours(n).ticks
      expect(actual).toStrictEqual(expected)
    })
  }
  for (const n of [-15, -10, -5, -2, -1, 0, 1, 2, 5, 10, 15]) {
    it(`${subject}.addDays(${n}) should return a ${subject} representing the provided date, at the same time of the original date`, () => {
      const ref = new Date()
      const expected = ref.getTime() + n * ONE_DAY_MS
      const actual = DateTime.fromDate(ref).addDays(n).ticks
      expect(actual).toStrictEqual(expected)
    })
  }

  for (const n of [
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: -20, expected: new Date(2019, 4, 31, 12, 0, 0, 0) },
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: -15, expected: new Date(2019, 9, 31, 12, 0, 0, 0) },
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: -10, expected: new Date(2020, 2, 31, 12, 0, 0, 0) },
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: -5, expected: new Date(2020, 7, 31, 12, 0, 0, 0) },
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: -2, expected: new Date(2020, 10, 30, 12, 0, 0, 0) },
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: -1, expected: new Date(2020, 11, 31, 12, 0, 0, 0) },
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: 0, expected: new Date(2021, 0, 31, 12, 0, 0, 0) },
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: 1, expected: new Date(2021, 1, 28, 12, 0, 0, 0) },
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: 2, expected: new Date(2021, 2, 31, 12, 0, 0, 0) },
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: 5, expected: new Date(2021, 5, 30, 12, 0, 0, 0) },
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: 10, expected: new Date(2021, 10, 30, 12, 0, 0, 0) },
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: 15, expected: new Date(2022, 3, 30, 12, 0, 0, 0) },
    { ref: new Date(2021, 0, 31, 12, 0, 0, 0), param: 20, expected: new Date(2022, 8, 30, 12, 0, 0, 0) },
  ]) {
    it(`${subject}.addMonths(${n.param}) should return a ${subject} representing the provided date, at the same time of the original date`, () => {
      const ref = n.ref
      const expected = n.expected.getTime()
      const actual = DateTime.fromDate(ref).addMonths(n.param).ticks
      expect(actual).toStrictEqual(expected)
    })
  }

  for (const n of [-15, -10, -5, -2, -1, 0, 1, 2, 5, 10, 15]) {
    it(`${subject}.addYears(${n}) should return a ${subject} representing the provided date, at the same time of the original date`, () => {
      const ref = new Date()
      const expected = new Date(ref.getFullYear() + n, ref.getMonth(), ref.getDate(), ref.getHours(), ref.getMinutes(), ref.getSeconds(), ref.getMilliseconds()).getTime()
      const actual = DateTime.fromDate(ref).addYears(n).ticks
      expect(actual).toStrictEqual(expected)
    })
  }

  it(`${subject}.addYears(1) should return a 2021-02-28 when adding one year from 2020-02-29 representing the provided date with a leap year offset`, () => {
    const ref = new Date(2020, 1, 29)
    const expected = new Date(ref.getFullYear() + 1, ref.getMonth(), 28, ref.getHours(), ref.getMinutes(), ref.getSeconds(), ref.getMilliseconds()).getTime()
    const actual = DateTime.fromDate(ref).addYears(1).ticks
    expect(actual).toStrictEqual(expected)
  })


  for (const n of [
    { ref: new Date(2021, 0, 10), param: TimeSpan.fromDays(1), expected: new Date(2021, 0, 11).getTime() }
  ]) {
    it(`${subject}.add(TimeSpan.fromDays(1)) should return a ${subject} that represents one day ahead`, () => {
      const expected = n.expected
      const actual = DateTime.fromDate(n.ref).add(TimeSpan.fromDays(1)).ticks
      expect(actual).toStrictEqual(expected)
    })
  }

  it(`DateTime .subtract returns an instance of a TimeSpan`, () => {
    const ref = new DateTime()
    const actual = ref.subtract(ref.addHours(-1))
    expect(actual).toBeInstanceOf(TimeSpan)
  })

  it(`new DateTime(2021, 1, 31, 12).subtract(DateTime.today) results in 12 hours TimeSpan.`, () => {
    const ref = new DateTime(2021, 1, 31, 12)
    const expected = 12 * 1000 * 60 * 60
    const actual = ref.subtract(DateTime.today).totalMilliseconds
    expect(actual).toStrictEqual(expected)
  })
})