import { request } from '../models'

const data: request.clientData = {
  showPrivacy: true,
  showIntro: true,
  location: '',
  userInfo: {},
  venue: {},
  timeslot: {},
  voucher: [
    { date: '2020-04-04T03:24:00', venueName: 'Albert Heijn', venueLocation: 'Offerandestraat' },
    { date: '2020-04-05T07:24:00', venueName: 'Delhaize', venueLocation: 'Plantin MoretusLei' },
    { date: '2020-03-05T07:24:00', venueName: 'Delhaize', venueLocation: 'Plantin MoretusLei' }
  ]
}

export { data }
