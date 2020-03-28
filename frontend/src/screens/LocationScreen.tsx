import React, { useContext } from 'react'
import store from '../store'

const LocationScreen = () => {
  const { showNext } = useContext(store)

  return (
    <div>
      Location
      <button onClick={() => showNext()}>add</button>
    </div>
  )
}

export default LocationScreen
