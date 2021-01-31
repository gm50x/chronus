const {
  ONE_SECOND_MS,
  ONE_MINUTE_MS,
  ONE_HOUR_MS,
  ONE_DAY_MS
} = require('./constants')

const {
  TimeSpan
} = require('./timespan')

class DateTime {
  constructor(year, month = 1, day = 1, hours = 0, minutes = 0, seconds = 0, milliseconds = 0) {
    const now = new Date()
    year = year || now.getFullYear()
    month = month || now.getMonth() + 1
    day = day || now.getDate()
    hours = (hours || hours === 0) ? hours : now.getHours()
    minutes = (minutes || minutes === 0) ? minutes : now.getMinutes()
    seconds = (seconds || seconds === 0) ? seconds : now.getSeconds()
    milliseconds = (milliseconds || milliseconds !== 0) ? milliseconds : now.getMilliseconds()
    this._ref = new Date(year, month - 1, day, hours, minutes, seconds, milliseconds)
  }

  static fromDate(date = new Date()) {
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

  static daysInMonth(year, month) {
    return new Date(year, month, 0)
      .getDate()
  }

  static get now() {
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

  static get today() {
    const date = new Date()
    return DateTime.fromDate(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      )
    )
  }

  get ticks() {
    return this._ref.getTime()
  }

  get milliseconds() {
    return this._ref.getMilliseconds()
  }

  get seconds() {
    return this._ref.getSeconds()
  }

  get minutes() {
    return this._ref.getMinutes()
  }

  get hours() {
    return this._ref.getHours()
  }

  get day() {
    return this._ref.getDate()
  }


  get month() {
    return this._ref.getMonth() + 1
  }

  get year() {
    return this._ref.getFullYear()
  }

  get dayOfWeek() {
    return this._ref.getDay()
  }

  get dayOfYear() {
    return (Date.UTC(this._ref.getFullYear(), this._ref.getMonth(), this._ref.getDate()) - Date.UTC(this._ref.getFullYear(), 0, 0)) / ONE_DAY_MS;
  }

  get timeOfDay() {
    return new TimeSpan(this._ref.getTime() - DateTime.today.ticks)
  }

  add(timespan = new TimeSpan()) {
    return DateTime.fromDate(new Date(this._ref.getTime() + timespan.totalMilliseconds))
  }

  addMilliseconds(ms = 0) {
    return DateTime.fromDate(new Date(this._ref.getTime() + ms))
  }

  addSeconds(seconds = 0) {
    return DateTime.fromDate(new Date(this._ref.getTime() + seconds * ONE_SECOND_MS))
  }

  addMinutes(minutes = 0) {
    return DateTime.fromDate(new Date(this._ref.getTime() + minutes * ONE_MINUTE_MS))
  }

  addHours(hours = 0) {
    return DateTime.fromDate(new Date(this._ref.getTime() + hours * ONE_HOUR_MS))
  }

  addDays(days = 0) {
    return DateTime.fromDate(new Date(this._ref.getTime() + days * ONE_DAY_MS))
  }

  addMonths(months = 0) {
    const monthOffset = this.month + months
    const yearsOffset = Math.floor(monthOffset / 12)
    const month = monthOffset % 12
    const date = this.addYears(yearsOffset)
    const daysInMonth = DateTime.daysInMonth(date.year, month)
    const day = (month === 2 && this.day > daysInMonth) ? daysInMonth : this.day
    return new DateTime(
      date.year,
      month,
      day,
      date.hours,
      date.minutes,
      date.seconds,
      date.milliseconds,
    )
  }

  addYears(years = 0) {
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

  subtract(date = new DateTime()) {
    return new TimeSpan(this._ref.getTime() - date._ref.getTime())
  }

  compareTo(date = new DateTime()) {
    const diff = this.ticks - date.ticks
    if (diff > 0) {
      return 1
    } else if (diff < 0) {
      return -1
    } else {
      return 0
    }
  }

  equals(date = new DateTime()) {
    return this.ticks === date.ticks
  }
}

module.exports = {
  DateTime
}