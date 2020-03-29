import { format, getHours, getMinutes } from 'date-fns'

const getHourAndDateString = (iso: string) => {
  const dateString = new Date(iso)
  let minutes: number | string = getMinutes(dateString)
  if (!minutes) minutes = '00'

  return {
    date: format(dateString, 'EEEE, MMMM do, yyyy'),
    time: `${getHours(dateString)}:${minutes}`
  }
}

export { getHourAndDateString }
