import React from 'react'
import { Header } from 'semantic-ui-react'
import { Message, List } from '../components'

const TimeSlotsScreen = () => {
  const items = [
    { message: 'Time slot 1' },
    { message: 'Time slot 2' },
    { message: 'Time slot 3' }
  ]
  return (
    <div id="container">
      <Header id="header" as="h1">Available time slots</Header>
      <List
        clickable
        id="card"
        items={items}
      />
    </div>
  )
}

export default TimeSlotsScreen
