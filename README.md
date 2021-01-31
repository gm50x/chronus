# Chronus
Chronus is a date and time manipulation library based on C#'s DateTime struct with 0 dependencies. The central idea is to simplify such manipulation by providing a class with proper behaviors without having the rethink the calculations everything you need to add or subtract dates.

## Classes in the Package
- Calendar (aka DateTime) is used for dealing with dates;
- Duration (aka TimeSpan) is used for dealing with time intervals;

## Examples

```javascript



  const { Calendar, Duration } = require('@gm50x/chronus')

  const now = Calendar.now
  const today = Calendar.today
  const tomorrow = today.addDays(1)
  const nextMonth = today.addMonths(1)
  const nextYear = today.addYears(1)
  const tomorrowMinusToday = tomorrow.subtract(today)
  const nowPlus30Mins = now.add(Duration.fromMinutes(30))
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
  console.log(Duration.fromHours(2).toString())

```