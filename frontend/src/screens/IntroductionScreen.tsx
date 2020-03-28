import React, { useContext } from 'react'
import store from '../store'

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
