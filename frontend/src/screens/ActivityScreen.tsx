import React from 'react'
import { Header } from 'semantic-ui-react'
import { IconButton } from '../components'
import icons from '../assets/icons'

/**
 * TODO
 * 1. Use (google maps) categories of activities?
 */

const ActivityScreen = () => {
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
          return <IconButton onClick={() => alert(activities[index])} key={index} icon={activity.icon} label={activity.label} />
        })}
      </div>
    </div>
  )
}

export default ActivityScreen
