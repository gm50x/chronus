const {
  ONE_SECOND_MS,
  ONE_MINUTE_MS,
  ONE_HOUR_MS,
  ONE_DAY_MS
} = require('./constants')

class TimeSpan {
  constructor(ms = 0) {
    this._ms = ms
  }

  static fromMilliseconds(ms = 0) {
    return new TimeSpan(ms)
  }

  static fromSeconds(seconds = 0) {
    return new TimeSpan(seconds * ONE_SECOND_MS)
  }

  static fromMinutes(minutes = 0) {
    return new TimeSpan(minutes * ONE_MINUTE_MS)
  }

  static fromHours(hours = 0) {
    return new TimeSpan(hours * ONE_HOUR_MS)
  }

  static fromDays(days = 0) {
    return new TimeSpan(days * ONE_DAY_MS)
  }

  toString() {
    const pad = (n, x = 2) => n.toString().padStart(x, '0')
    return `${this.days
      }.${pad(this.hours % 24)
      }:${pad(this.minutes % 60)
      }:${pad(this.seconds % 60)
      }.${pad(this.milliseconds % 1000, 3)
      }`
  }

  get totalMilliseconds() {
    return this._ms
  }

  get milliseconds() {
    return this._ms
  }

  get totalSeconds() {
    return this._ms / ONE_SECOND_MS
  }

  get seconds() {
    return Math.floor(this.totalSeconds)
  }

  get totalMinutes() {
    return this._ms / ONE_MINUTE_MS
  }

  get minutes() {
    return Math.floor(this.totalMinutes)
  }

  get totalHours() {
    return this._ms / ONE_HOUR_MS
  }

  get hours() {
    return Math.floor(this.totalHours)
  }

  get totalDays() {
    return this._ms / ONE_DAY_MS
  }

  get days() {
    return Math.floor(this.totalDays)
  }

}

module.exports = {
  TimeSpan,
}