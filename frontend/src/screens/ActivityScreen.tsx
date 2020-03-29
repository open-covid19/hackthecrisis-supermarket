import React, { useContext } from 'react'
import { Header } from 'semantic-ui-react'
import { IconButton } from '../components'
import icons from '../assets/icons'
import store from '../store'

/**
 * TODO
 * 1. Use (google maps) categories of activities?
 */

const ActivityScreen = () => {
  const { showNext } = useContext(store)

  const activities = [
    { label: 'Shop', icon: icons.shoppingcart },
    { label: 'Walk', icon: icons.park },
    { label: 'Medicine', icon: icons.medicine },
    { label: 'Food', icon: icons.restaurant }
  ]

  return (
    <div id="container">
      <Header id="header" as="h1">Where would you like to go?</Header>
      <div id="card">
        {activities.map((activity, index) => {
          // @ts-ignore
          return <IconButton onClick={() => showNext()} key={index} icon={activity.icon} label={activity.label} />
        })}
      </div>
    </div>
  )
}

export default ActivityScreen
