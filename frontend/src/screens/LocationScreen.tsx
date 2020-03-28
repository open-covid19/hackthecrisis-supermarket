import React from 'react'
import { Header } from 'semantic-ui-react'
import { Card, Message, StoreMapComponent } from '../components'

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
      <StoreMapComponent
        id="card"
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCow4NONLwTfk6aJyDGYqExE9Y2YVOVm2I&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div id="map" style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}

export default LocationScreen
