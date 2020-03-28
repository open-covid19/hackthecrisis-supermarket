import React, { useContext } from 'react'
import store from '../store'

const TimeSlotsScreen = () => {
  const { showNext } = useContext(store)
  
  return (
    <>
      <article id='content'>
        Time Slots
      </article>
      <button id='button' onClick={() => showNext()}>add</button>
    </>
  )
  }

export default TimeSlotsScreen
