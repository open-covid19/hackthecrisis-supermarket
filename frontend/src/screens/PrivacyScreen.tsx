import React, { useContext } from 'react'
import { Card } from '../components'
import store from '../store'

const PrivacyScreen = () => {
  const { showNext } = useContext(store)

  return (
    <div id="container">
      <Card
        id="card"
        title='{Privacy Disclaimer Title}'
        buttonText='Accept'
        handleCardAction={() => showNext()}
      >Privacy Disclaimer Message</Card>
    </div>
  )
}

export default PrivacyScreen
