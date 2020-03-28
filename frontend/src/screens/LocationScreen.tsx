import React from 'react'
import { Header } from 'semantic-ui-react'
import { Card, Message } from '../components'

/**
 * TODO
 * 1. Implement basic input field which accepts only specific string now
 * 2. Check for location in store, if present make it a clickable button
 * 3. add disclaimer message stressing the importance to shop locally
 */

const LocationScreen = () => {
  return (
    <div id="container">
      <Header id="header" as="h1">Where are you located?</Header>
      <Message id="message" message="Tell the people why they need to shop as local as possible" />
      <Card
        id="card"
        message="{Here will come whatever we find for the location thingy}"
      />
    </div>
  )
}

export default LocationScreen
