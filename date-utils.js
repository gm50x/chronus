const ONE_SECOND_MS = 1000

const ONE_MINUTE_MS = ONE_SECOND_MS * 60

const ONE_HOUR_MS = ONE_MINUTE_MS * 60

const ONE_DAY_MS = ONE_HOUR_MS * 24

const daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate()
}

const addDays = (date, days) => {
  return new Date(date.getTime() + ONE_DAY_MS * days)
}

const diffInMilliseconds = (a, b) => {
  const aTime = a.getTime()
  const bTime = b.getTime()
  return aTime - bTime
}

const diffInSeconds = (a, b) => {
  const aTime = a.getTime()
  const bTime = b.getTime()
  return (aTime - bTime) / ONE_SECOND_MS
}

const diffInMinutes = (a, b) => {
  const aTime = a.getTime()
  const bTime = b.getTime()
  return (aTime - bTime) / ONE_MINUTE_MS
}

const diffInHours = (a, b) => {
  const aTime = a.getTime()
  const bTime = b.getTime()
  return (aTime - bTime) / ONE_HOUR_MS
}

const diffInDays = (a, b) => {
  const aTime = a.getTime()
  const bTime = b.getTime()
  return (aTime - bTime) / ONE_DAY_MS
}

const totalSeconds = (a) => {
  return a / ONE_SECOND_MS
}

const totalSecondsTruncated = (a) => {
  return Math.floor(totalSeconds(a))
}


const totalMinutes = (a) => {
  return a / ONE_HOUR_MS
}

const totalMinutesTruncated = (a) => {
  return Math.floor(totalMinutes(a))
}

const totalHours = (a) => {
  return time = a / ONE_HOUR_MS
}

const totalHoursTruncated = (a) => {
  return Math.floor(totalHours(a))
}

const totalDays = (a) => {
  return a / ONE_DAY_MS
}

const totalDaysTruncated = (a) => {
  return Math.floor(totalDays(a))
}


module.exports = {
  ONE_SECOND_MS,
  ONE_MINUTE_MS,
  ONE_HOUR_MS,
  ONE_DAY_MS,
  daysInMonth,
  addDays,
  diffInMilliseconds,
  diffInSeconds,
  diffInMinutes,
  diffInHours,
  diffInDays,
  totalSeconds,
  totalSecondsTruncated,
  totalMinutes,
  totalMinutesTruncated,
  totalHours,
  totalHoursTruncated,
  totalDays,
  totalDaysTruncated,
}