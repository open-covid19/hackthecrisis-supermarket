import React from 'react'
import { Header } from 'semantic-ui-react'
import { List, Message } from '../components'

/**
 * TODO: implement screen
 */

const UserStatsScreen = () => {
  const items = [
    { message: 'Are you over 50 years old?' },
    { message: 'Are you employed in the care sector?' },
    { message: 'Are you employed in the medical sector?' }
  ]
  return (
    <div id="container">
      <Header id="header" as="h1">About yourself</Header>
      <Message id="message" message="The location you chose allows for preferential treatment based on some individual characteristics. Please specify below whether those apply to you." />
      <List
        id="card"
        items={items}
      />
    </div>
  )
}

export default UserStatsScreen
