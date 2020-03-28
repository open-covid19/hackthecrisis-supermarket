import ActivityScreen from './ActivityScreen'
import IntroductionScreen from './IntroductionScreen'
import LocationScreen from './LocationScreen'
import PrivacyScreen from './PrivacyScreen'
import ProofOfRequestScreen from './ProofOfRequestScreen'
import TimeSlotScreen from './TimeSlotsScreen'
import UserStatsScreen from './UserStatsScreen'

// the order of the items in this array define the sequential flow of the app
const screens = [
  PrivacyScreen,
  IntroductionScreen,
  LocationScreen,
  ActivityScreen,
  UserStatsScreen,
  TimeSlotScreen,
  ProofOfRequestScreen
]

export default screens
