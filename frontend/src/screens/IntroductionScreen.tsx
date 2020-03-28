import React, { useContext } from 'react'
import store from '../store'

const IntroductionScreen = () => {
  const { showNext } = useContext(store)
  
  return (
    <div>
      Introduction and Disclaimer
      <button onClick={() => showNext()}>add</button>
    </div>
  )
}

export default IntroductionScreen
