import { inspect } from 'util'

import {
  ONE_SECOND_MS,
  ONE_MINUTE_MS,
  ONE_HOUR_MS,
  ONE_DAY_MS
} from '../time-constants/time-constants'

export class TimeSpan {
  private _ref: number;
  constructor(ticks = 0) {
    this._ref = ticks
  }

  static fromMilliseconds(ms: number = 0): TimeSpan {
    return new TimeSpan(ms)
  }

  static fromSeconds(seconds: number = 0): TimeSpan {
    return new TimeSpan(seconds * ONE_SECOND_MS)
  }

  static fromMinutes(minutes: number = 0): TimeSpan {
    return new TimeSpan(minutes * ONE_MINUTE_MS)
  }

  static fromHours(hours: number = 0): TimeSpan {
    return new TimeSpan(hours * ONE_HOUR_MS)
  }

  static fromDays(days: number = 0): TimeSpan {
    return new TimeSpan(days * ONE_DAY_MS)
  }

  toString(): string {
    const pad = (n: number, x: number = 2) => n.toString().padStart(x, '0')
    return `${this.days
      }.${pad(this.hours % 24)
      }:${pad(this.minutes % 60)
      }:${pad(this.seconds % 60)
      }.${pad(this.milliseconds % 1000, 3)
      }`
  }

  get totalMilliseconds(): number {
    return this._ref
  }

  get milliseconds(): number {
    return this._ref
  }

  get totalSeconds(): number {
    return this._ref / ONE_SECOND_MS
  }

  get seconds(): number {
    return Math.floor(this.totalSeconds)
  }

  get totalMinutes(): number {
    return this._ref / ONE_MINUTE_MS
  }

  get minutes(): number {
    return Math.floor(this.totalMinutes)
  }

  get totalHours(): number {
    return this._ref / ONE_HOUR_MS
  }

  get hours(): number {
    return Math.floor(this.totalHours)
  }

  get totalDays(): number {
    return this._ref / ONE_DAY_MS
  }

  get days(): number {
    return Math.floor(this.totalDays)
  }

  [inspect.custom](depth, opts): string {
    return this.toString()
  }
}