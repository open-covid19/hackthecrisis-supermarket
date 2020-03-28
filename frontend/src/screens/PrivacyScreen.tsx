import React from 'react'
import { Card } from '../components'

const PrivacyScreen = () => {
  return (
    <article id='content'>
      <Card
        title='{Privacy Disclaimer Title}'
        buttonText='Accept'
        message="{Privacy Disclaimer Message}"
        handleCardAction={() => { return null }}
      />
    </article>
  )
}

export default PrivacyScreen
