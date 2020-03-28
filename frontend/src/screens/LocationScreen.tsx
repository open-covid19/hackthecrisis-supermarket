import React from 'react'
import {StoreMapComponent} from "../components/StoreMapComponent"

/**
 * TODO
 * 1. Implement basic input field which accepts only specific string now
 * 2. Check for location in store, if present make it a clickable button
 * 3. add disclaimer message stressing the importance to shop locally
 */

const LocationScreen = () => {
  return (
    <article id='content'>
        Location
        <StoreMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCow4NONLwTfk6aJyDGYqExE9Y2YVOVm2I&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        ></StoreMapComponent>
    </article>
  )
}

export default LocationScreen
