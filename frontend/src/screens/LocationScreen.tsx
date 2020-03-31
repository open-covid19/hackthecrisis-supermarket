import React from 'react'
import { Header } from 'semantic-ui-react'
import { Message, Map } from '../components'

/**
 * TODO
 * 1. Implement basic input field which accepts only specific string now
 * 2. Check for location in store, if present make it a clickable button
 * 3. add disclaimer message stressing the importance to shop locally
 */

const LocationScreen = () => {
  return (
    <article id="container">
      <Header id="header" as="h1">Where are you? </Header>
      <Message id="message" message="
                                     <p>For best results please try to be as accurate as possible. By using this app you are contributing to the reduction of overcrowding of our public spaces. </p>
<p>By choosing locations close to you, you are minimising the movement of people, and reducing the spread of the pandemic. </p>
<p>We understand that you may want to go to your favourite shop in another neighbourhood but our suggestions are optimised to minimise the spread of the virus, and who knows? Our suggestion might just become your new favourite shop. </p>
" />
      <Map
        id="card"
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCow4NONLwTfk6aJyDGYqExE9Y2YVOVm2I&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div id="map" style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </article>
  )
}

export default LocationScreen
