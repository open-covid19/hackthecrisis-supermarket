import React, { useContext } from 'react'
import store from '../store'

const PrivacyScreen = () => {
  const { showNext } = useContext(store)
  
  return (
    <div>
      Privacy
      <button onClick={() => showNext()}>add</button>
    </div>
  )
}

export default PrivacyScreen
