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

  it(`${subject}.fromDate() should return a ${subject} instance`, () => {
    const actual = DateTime.fromDate()
    expect(actual).toBeInstanceOf(DateTime)
  })

  it(`${subject}.fromDate(Date) should return a ${subject} instance`, () => {
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
    const actual = ref.subtract(
      new DateTime(ref.year, ref.month, ref.day)
    ).totalMilliseconds
    expect(actual).toStrictEqual(expected)
  })

  it(`new DateTime(2021, 1, 31).toDate() returns an instance of Date.`, () => {
    const ref = new DateTime(2021, 1, 31)
    const actual = ref.toDate()
    expect(actual).toBeInstanceOf(Date)
  })

  it(`new DateTime(2021, 1, 31).toDate() returns a corresponding instance of Date.`, () => {
    const ref = new DateTime(2021, 1, 31)
    const expected = new Date(2021, 0, 31)
    const actual = ref.toDate()
    expect(actual).toStrictEqual(expected)
  })

  it(`new DateTime(2021, 1, 31).dayOfWeek returns a number between 0 and 6 (inclusive)`, () => {
    const ref = new DateTime(2021, 1, 31)
    const actual = ref.dayOfWeek
    expect(actual).toBeGreaterThanOrEqual(0)
    expect(actual).toBeLessThan(7)
  })

  for (let i = 0; i < 7; i++) {
    it(`new DateTime(2021, 1, ${i + 3}).dayOfWeek returns ${i} coresponding to the day of the week`, () => {
      const ref = new DateTime(2021, 1, i + 3)
      const actual = ref.dayOfWeek
      expect(actual).toStrictEqual(i)
    })
  }

  it(`new DateTime(n).dayOfYear returns a number between 1 and 365 (inclusive)`, () => {
    const refs = [
      new DateTime(2021, 1, 1),
      new DateTime(2021, 12, 31)
    ]

    refs.forEach(ref => {
      const actual = ref.dayOfYear
      expect(actual).toBeGreaterThanOrEqual(1)
      expect(actual).toBeLessThanOrEqual(365)
    })
  })

  it(`new DateTime(n).dayOfYear returns a number between 1 and 366 (inclusive) on leap years`, () => {
    const refs = [
      new DateTime(2024, 1, 1),
      new DateTime(2024, 12, 31)
    ]

    refs.forEach(ref => {
      const actual = ref.dayOfYear
      expect(actual).toBeGreaterThanOrEqual(1)
      expect(actual).toBeLessThanOrEqual(366)
    })
  })

  it(`new DateTime(2021, 12, 31).dayOfYear returns the number 366 on a leap year`, () => {
    const ref = new DateTime(2024, 12, 31)
    const actual = ref.dayOfYear
    expect(actual).toStrictEqual(366)
  })

  for (const year of [2021, 2024]) {
    let dayOfYear = 1
    for (let month = 1; month <= 12; month++) {
      for (let day = 1; day <= DateTime.daysInMonth(year, month); day++) {
        it(`new DateTime(${year}, ${month}, ${day}).dayOfYear returns ${dayOfYear}`, () => {
          const ref = new DateTime(year, month, day)
          const actual = ref.dayOfYear
          expect(actual).toStrictEqual(dayOfYear)
          dayOfYear++
        })
      }
    }
  }
})