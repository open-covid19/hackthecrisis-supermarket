import React from 'react'
import { Card } from '../components'
import { getRandomSlot } from '../functions/weights'

/**
 * TODO: Enable dismissal of PoR & app reqest
 */

const ProofOfRequestScreen = () => {
  return (
    <div id="container">
      <Card
        id="card"
        title='Your alloted time slots'
      >
        {getRandomSlot()}
      </Card>
    </div>
  )
}

export default ProofOfRequestScreen
