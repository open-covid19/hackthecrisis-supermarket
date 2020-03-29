import React, { useContext } from 'react'
import { Header } from 'semantic-ui-react'
import { List } from '../components'
import store from '../store'
import { getRandomSlot } from '../functions/weights'

const TimeSlotsScreen = () => {
  const { goToNextPage } = useContext(store)

  const items = [
    { value: getRandomSlot() },
    { value: getRandomSlot() },
    { value: getRandomSlot() }
  ]

  const handleSelection = (index: number) => {
    goToNextPage()
  }

  return (
    <div id="container">
      <Header id="header" as="h1">Most appropriate time slots</Header>
      <List
        clickable
        id="card"
        items={items}
        onClick={(i: number) => handleSelection(i)}
      />
    </div>
  )
}

export default TimeSlotsScreen
