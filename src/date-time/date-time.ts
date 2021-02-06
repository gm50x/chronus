import { inspect } from 'util'
import {
  ONE_SECOND_MS,
  ONE_MINUTE_MS,
  ONE_HOUR_MS,
  ONE_DAY_MS
} from '../time-constants'
import { TimeSpan } from '../time-span'


export class DateTime {
  private _ref: Date

  constructor(
    year?: number,
    month: number = 1,
    day: number = 1,
    hours: number = 0,
    minutes: number = 0,
    seconds: number = 0,
    milliseconds: number = 0
  ) {
    const now = new Date()
    year = year || now.getFullYear()
    month = (month || month === 0) ? month : now.getMonth() + 1
    day = day || now.getDate()
    hours = (hours || hours === 0) ? hours : now.getHours()
    minutes = (minutes || minutes === 0) ? minutes : now.getMinutes()
    seconds = (seconds || seconds === 0) ? seconds : now.getSeconds()
    milliseconds = (milliseconds || milliseconds === 0) ? milliseconds : now.getMilliseconds()
    this._ref = new Date(year, month - 1, day, hours, minutes, seconds, milliseconds)
  }

  static fromDate(date = new Date()): DateTime {
    return new DateTime(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    )
  }

  static daysInMonth(year, month): number {
    return new Date(year, month, 0)
      .getDate()
  }

  static get now(): DateTime {
    const now = new Date()
    return new DateTime(
      now.getFullYear(),
      now.getMonth() + 1,
      now.getDate(),
      now.getHours(),
      now.getMinutes(),
      now.getSeconds(),
      now.getMilliseconds(),
    )
  }

  static get today(): DateTime {
    const date = new Date()
    return DateTime.fromDate(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      )
    )
  }

  get ticks(): number {
    return this._ref.getTime()
  }

  get milliseconds(): number {
    return this._ref.getMilliseconds()
  }

  get seconds(): number {
    return this._ref.getSeconds()
  }

  get minutes(): number {
    return this._ref.getMinutes()
  }

  get hours(): number {
    return this._ref.getHours()
  }

  get day(): number {
    return this._ref.getDate()
  }

  get month(): number {
    return this._ref.getMonth() + 1
  }

  get year(): number {
    return this._ref.getFullYear()
  }

  get dayOfWeek(): number {
    return this._ref.getDay()
  }

  get dayOfYear(): number {
    return (Date.UTC(this._ref.getFullYear(), this._ref.getMonth(), this._ref.getDate()) - Date.UTC(this._ref.getFullYear(), 0, 0)) / ONE_DAY_MS
  }

  get timeOfDay(): TimeSpan {
    return new TimeSpan(this._ref.getTime() - DateTime.today.ticks)
  }

  toDate(): Date {
    return new Date(this._ref)
  }

  add(timespan = new TimeSpan()): DateTime {
    return DateTime.fromDate(new Date(this._ref.getTime() + timespan.totalMilliseconds))
  }

  addMilliseconds(ms = 0): DateTime {
    return DateTime.fromDate(new Date(this._ref.getTime() + ms))
  }

  addSeconds(seconds = 0): DateTime {
    return DateTime.fromDate(new Date(this._ref.getTime() + seconds * ONE_SECOND_MS))
  }

  addMinutes(minutes = 0): DateTime {
    return DateTime.fromDate(new Date(this._ref.getTime() + minutes * ONE_MINUTE_MS))
  }

  addHours(hours = 0): DateTime {
    return DateTime.fromDate(new Date(this._ref.getTime() + hours * ONE_HOUR_MS))
  }

  addDays(days = 0): DateTime {
    return DateTime.fromDate(new Date(this._ref.getTime() + days * ONE_DAY_MS))
  }

  addMonths(months = 0): DateTime {
    const years = months < 0 ? Math.ceil(months / 12) : Math.floor(months / 12)
    const remainingMonths = months % 12
    const dateOffsetedByYear = this.addYears(years)
    const month = dateOffsetedByYear.month + remainingMonths
    const daysInMonth = DateTime.daysInMonth(dateOffsetedByYear.year, month)
    const day = this.day <= daysInMonth ? this.day : daysInMonth

    return new DateTime(
      dateOffsetedByYear.year,
      month,
      day,
      dateOffsetedByYear.hours,
      dateOffsetedByYear.minutes,
      dateOffsetedByYear.seconds,
      dateOffsetedByYear.milliseconds,
    )
  }

  addYears(years = 0): DateTime {
    const year = this.year + years
    const daysInMonth = DateTime.daysInMonth(year, this.month)
    const day = (this.month === 2 && this.day > daysInMonth) ? daysInMonth : this.day
    return new DateTime(
      this.year + years,
      this.month,
      day,
      this.hours,
      this.minutes,
      this.seconds,
      this.milliseconds,
    )
  }

  subtract(date = new DateTime()): TimeSpan {
    return new TimeSpan(this.ticks - date.ticks)
  }

  compareTo(date = new DateTime()): -1 | 0 | 1 {
    const diff = this.ticks - date.ticks
    if (diff > 0) {
      return 1
    } else if (diff < 0) {
      return -1
    } else {
      return 0
    }
  }

  equals(date = new DateTime()): boolean {
    return this.ticks === date.ticks
  }

  toString(): string | any {
    return new Date(this._ref);
  }

  [inspect.custom](depth: unknown, opts: unknown): Date {
    return this.toString();
  }
}