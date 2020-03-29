// Non normalized weights of a time distribution
const times = [
  { weight: 1, t: '2020-04-04T07:00' },
  { weight: 1, t: '2020-04-04T07:30' },
  { weight: 1, t: '2020-04-04T08:00' },
  { weight: 1, t: '2020-04-04T08:30' },
  { weight: 2, t: '2020-04-04T09:00' },
  { weight: 4, t: '2020-04-04T09:30' },
  { weight: 7, t: '2020-04-04T10:00' },
  { weight: 8, t: '2020-04-04T10:30' },
  { weight: 8, t: '2020-04-04T11:00' },
  { weight: 4, t: '2020-04-04T11:30' },
  { weight: 1, t: '2020-04-04T12:00' },
  { weight: 1, t: '2020-04-04T12:30' },
  { weight: 1, t: '2020-04-04T13:00' },
  { weight: 2, t: '2020-04-04T13:30' },
  { weight: 4, t: '2020-04-04T14:00' },
  { weight: 8, t: '2020-04-04T14:30' },
  { weight: 10, t: '2020-04-04T15:00' },
  { weight: 10, t: '2020-04-04T15:30' },
  { weight: 8, t: '2020-04-04T16:00' },
  { weight: 3, t: '2020-04-04T16:30' },
  { weight: 1, t: '2020-04-04T17:00' },
  { weight: 1, t: '2020-04-04T17:30' },
  { weight: 1, t: '2020-04-04T18:00' },
  { weight: 4, t: '2020-04-04T18:30' },
  { weight: 4, t: '2020-04-04T19:00' },
  { weight: 4, t: '2020-04-04T19:30' },
  { weight: 2, t: '2020-04-04T20:00' }
]
// Converts weights into a probability function
export function probability (times: any) {
  const total = times.reduce((acc: any, t: any) => acc + t.weight, 0)
  return times.map((tim: any) => { return { weight: tim.weight / total, t: tim } })
}
// Converts a probability function into the corresponding cumulative
// this assumes that the 't' are already sorted
export function cumulative (probs: any) {
  const c = probs.reduce(
    (cumul: any, p: any) => cumul.concat([{ c_weight: p.weight + cumul[cumul.length - 1].c_weight, t: p.t.t }]),
    [{ c_weight: 0 }])
  return c.slice(1, c.length)
}
// Return a random sample t
export function sample_from (weights: any) {
  const cumul = cumulative(probability(weights))
  const r = Math.random()
  const chosen = cumul.filter((c: any) => c.c_weight > r)[0]
  return chosen.t
}

export function getRandomSlot () {
  return sample_from(times)
}
