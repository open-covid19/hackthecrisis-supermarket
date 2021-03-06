import React, { useContext, useEffect } from 'react'
import { Card } from '../components'
import store from '../store'
import { storageUtils } from '../utils'
import { storage } from '../models'

/**
 * TODO
 * 1. Set up disclaimer messages (MVP):
 * Message 1: app does not enforce anything, just helps to spread traffic
 * Message 2: less personal exposure, better preparation by prediction for shops, flatten the curve, less queuing
 * 2. set up section where you can review them (NTH)
 */

const IntroductionScreen = () => {
  const { goToNextPage } = useContext(store)

  useEffect(() => {
    const showIntro = storageUtils.getItem(storage.Key.ShowIntro)
    if (showIntro) goToNextPage()
  }, [])

  const handleAccept = () => {
    storageUtils.setItem(storage.Key.ShowIntro, 'false')
    goToNextPage()
  }
  return (
    <article id="container">
      <Card
        id="card"
        title="Welcome to Spread The Queue"
        buttonText="Accept"
        handleCardAction={() => handleAccept()}
      >
        <div>
          <p>By using this app you are helping to reduce overcrowding in public spaces</p>
          <p>The app will use your details to suggest optimal times to visit public spaces</p>
          <p>The timeslots are allocated as fairly as possible</p>
          <p>By sticking to your suggested timeslots you will be:</p>
          <ul>
            <li>Helping to reduce overcrowding in public spaces</li>
            <li>Reducing the spread of the virus</li>
            <li>Reduce queuing time</li>
            <li>
              Improving the working environment for public sector workers (including supermarket
              employees)
            </li>
          </ul>
          <p>By working together we can reduce the duration of the pandemic</p>
        </div>
      </Card>
    </article>
  )
}

export default IntroductionScreen
