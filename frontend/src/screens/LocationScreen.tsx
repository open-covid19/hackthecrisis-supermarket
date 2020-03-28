import React, { useContext } from 'react'
import store from '../store'

const LocationScreen = () => {
  const { showNext } = useContext(store)

  return (
    <>
      <article id='content'>
        Location
      </article>
      <button id='button' onClick={() => showNext()}>add</button>
    </>
  )
}

export default LocationScreen
