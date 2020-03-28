import React, { useContext } from 'react'
import store from '../store'

const TimeSlotsScreen = () => {
  const { showNext } = useContext(store)
  
  return (
    <div>
      Time Slots
      <button onClick={() => showNext()}>add</button>

    </div>
  )
}

export default TimeSlotsScreen
