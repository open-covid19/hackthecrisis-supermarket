import React, { useContext } from 'react'
import { Card } from '../components'
import store from '../store'

/**
 * TODO
 * 1. Set up disclaimer messages (MVP):
 * Message 1: app does not enforce anything, just helps to spread traffic
 * Message 2: less personal exposure, better preparation by prediction for shops, flatten the curve, less queuing
 * 2. set up section where you can review them (NTH)
 */

const IntroductionScreen = () => {
  const { showNext } = useContext(store)

  return (
    <div id="container">
      <Card
        id="card"
        title='{Introduction Screen Title 1}'
        buttonText='Accept'
        message="{How does the app help with the Covid-19 outbreak}"
        handleCardAction={() => showNext()}
      />
    </div>
  )
}

export default IntroductionScreen
