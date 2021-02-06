# Chronus
Chronus is a date and time manipulation library based on C#'s DateTime and TimeSpan. It's got 0 dependencies and the instances are always immutable. The central idea is to try and simplify the manipulation of dates by providing a level of abstraction, preventing us from repeating the same functions every new project to work around javascript dates.

The library exports 2 classes DateTime and TimeSpan which are used to manipulate dates and time durations. Under the hood DateTime encapuslates Date and TimeSpan encapuslates a number that represents milliseconds or ticks.

There are plenty of examples down below, but you can also check the source code or tests on [Github](https://github.com/gm50x/chronus). If you have any questions feel free to open an issue there!
## Installation
```bash
npm install @gm50x/chronus
```

```javascript
const {
  DateTime,
  TimeSpan
} = require('@gm50x/chronus')

const now = DateTime.now
const today = DateTime.today
const tomorrow = today.addDays(1)
const nextMonth = today.addMonths(1)
const nextYear = today.addYears(1)
const tomorrowMinusToday = tomorrow.subtract(today)
const nowPlus30Mins = now.add(TimeSpan.fromMinutes(30))
const nowPlus2Hours = now.addHours(2)
const oneHundredDaysAhead = today.addDays(100)
const oneDayFiveMinutesTime = TimeSpan.fromDays(1).addMinutes(5)

console.log(now)
console.log(now.toDate())
console.log(today)
console.log(tomorrow)
console.log(nextMonth)
console.log(nextYear)
console.log(tomorrowMinusToday)
console.log(nowPlus30Mins)
console.log(nowPlus2Hours)
console.log(oneHundredDaysAhead)
console.log(oneHundredDaysAhead.dayOfYear)
console.log(now.equals(today))
console.log(today.equals(today))
console.log(now.timeOfDay.totalHours)
console.log(TimeSpan.fromHours(2))
console.log(oneDayFiveMinutesTime)
```

## Keep in touch
---
- Author: Getúlio Magela Silva
- [LinkedIn](https://linkedin.com/in/getuliomagela)