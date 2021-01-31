# Chronus
Chronus is a date and time manipulation library based on C#'s DateTime and TimeSpan and with 0 dependencies. The central idea is to try and simplify the manipulation of dates by providing a level of abstraction to keep us from repeating the same functions everywhere.
## Classes
- **DateTime** is used for dealing with dates;
- **TimeSpan** is used for dealing with time;

## Installation (Currently hosted on github registry)
```bash
npm install @gm50x/chronus
```

```javascript
const { TimeSpan, DateTime } = require('@gm50x/chronus')

const now = DateTime.now
const today = DateTime.today
const tomorrow = today.addDays(1)
const nextMonth = today.addMonths(1)
const nextYear = today.addYears(1)
const tomorrowMinusToday = tomorrow.subtract(today)
const nowPlus30Mins = now.add(TimeSpan.fromMinutes(30))
const nowPlus2Hours = now.addHours(2)

const daysAhead = today.addDays(100)

console.log(now)
console.log(now.toDate())
console.log(today)
console.log(tomorrow)
console.log(nextMonth)
console.log(nextYear)
console.log(tomorrowMinusToday)
console.log(nowPlus30Mins);
console.log(nowPlus2Hours)
console.log(daysAhead)
console.log(daysAhead.dayOfYear);
console.log(now.equals(today))
console.log(today.equals(today))
console.log(now.timeOfDay.totalHours)
console.log(TimeSpan.fromHours(2).toString())
```