import React from 'react'
import { Header } from 'semantic-ui-react'
import { Message, List } from '../components'

const TimeSlotsScreen = () => {
  const items = [
    { message: 'Are you over 50 years old?', buttonType: 'toggle' },
    { message: 'Are you employed in the care sector?', buttonType: 'toggle' },
    { message: 'Are you employed in the medical sector?', buttonType: 'toggle' }
  ]
  return (
    <div id="container">
      <Header id="header" as="h1">About yourself</Header>
      <Message id="message" message="The location you chose allows for preferential treatment based on some individual characteristics. Please specify below whether those apply to you." />
      <List
        clickable
        id="card"
        items={items}
      />
    </div>
  )
}

export default TimeSlotsScreen
