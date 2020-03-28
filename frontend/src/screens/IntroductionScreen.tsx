import React, { useContext } from 'react'
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
    <>
      <article id='content'>
        Introduction and Disclaimer
      </article>
      <button id='button' onClick={() => showNext()}>add</button>
    </>
  )
}

export default IntroductionScreen
