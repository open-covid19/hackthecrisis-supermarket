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
        title='{Wlecome to Spread The Queue 1}'
        buttonText='Accept'
        message="{By using this app you are helping to reduce overcrowding in public spaces
                 
The app will use your details to suggest optimal times to visit public spaces
                 
The timeslots are allocated as fairly as possible
                 
By sticking to your suggested timeslots you will be: 
                 
-	Helping to reduce overcrowding in public spaces 
-	Reducing the spread of the virus
-	Reduce queuing time
-	Improving the working environment for public sector workers (including supermarket employees) 
                 
By working together we can reduce the duration of the pandemic}"
        handleCardAction={() => showNext()}
      />
    </div>
  )
}

export default IntroductionScreen
