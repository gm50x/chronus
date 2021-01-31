const { DateTime, TimeSpan } = require('./src')

const main = () => {
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
}

main()