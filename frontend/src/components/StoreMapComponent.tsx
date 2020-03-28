import React, { useEffect } from 'react'
import { initialize } from '../functions/google'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const StoreMapComponent = withScriptjs(
  withGoogleMap((props: any) => {
    useEffect(() => {
      initialize()
    })
    return (
      <div id="map">
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: -50.857, lng: 4.348 }}>
          {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
      </div>
    )
  })
)

export default StoreMapComponent
