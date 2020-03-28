import React, { useContext } from 'react'
import store from '../store'

const UserStatsScreen = () => {
  const { showNext } = useContext(store)
  
  return (
    <div>
      User Stats
      <button onClick={() => showNext()}>add</button>
    </div>
  )
}

export default UserStatsScreen
