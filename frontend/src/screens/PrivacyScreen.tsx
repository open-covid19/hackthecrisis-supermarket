import React, { useContext } from 'react'
import store from '../store'

const PrivacyScreen = () => {
  const { showNext } = useContext(store)
  
  return (
    <>
      <article id='content'>
        Privacy
      </article>
      <button id='button' onClick={() => showNext()}>add</button>
    </>
  )
}

export default PrivacyScreen
