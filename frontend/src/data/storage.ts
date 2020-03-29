import { request } from '../models'

const data: request.clientData = {
  showPrivacy: true,
  showIntro: true,
  location: '',
  activity: '',
  userInfo: {},
  venue: {
    venueLocation: 'Rue Marché Aux Poulet, 1000 Bruxelles',
    venueName: 'Carrefour Market'
  },
  timeslot: {},
  voucher: []
}

export { data }
