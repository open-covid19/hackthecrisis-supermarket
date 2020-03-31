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
  const { goToNextPage, clientData, setClientData } = useContext(store)

  const activities = [
    { label: 'Shop', icon: icons.shoppingcart },
    { label: 'Walk', icon: icons.park },
    { label: 'Medicine', icon: icons.medicine },
    { label: 'Food', icon: icons.restaurant }
  ]

  const handleSelection = (activity: string) => {
    setClientData({ ...clientData, activity })
    goToNextPage()
  }

  return (
    <article id="container">
      <Header id="header" as="h1">Where would you like to go?</Header>
      <div id="card">
        {activities.map((activity, index) => {
          // @ts-ignore
          return <IconButton onClick={() => handleSelection(activity.label)} key={index} icon={activity.icon} label={activity.label} />
        })}
      </div>
    </article>
  )
}

export default ActivityScreen
