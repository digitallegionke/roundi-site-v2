export function formatDate(dateString: string): string {
  const date = new Date(dateString)

  // Get day with suffix (1st, 2nd, 3rd, 4th, etc.)
  const day = date.getDate()
  const suffix = getDaySuffix(day)

  // Get month abbreviation
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = months[date.getMonth()]

  // Get year
  const year = date.getFullYear()

  return `${day}${suffix} ${month} ${year}`
}

function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return 'th'
  }

  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}
