import React, { useContext } from 'react'
import { Header } from 'semantic-ui-react'
import { List } from '../components'
import store from '../store'

const TimeSlotsScreen = () => {
  const { showNext } = useContext(store)

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
        onClick={() => showNext()}
      />
    </div>
  )
}

export default TimeSlotsScreen
