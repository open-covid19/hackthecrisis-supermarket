import React, { useContext } from 'react'
import store from '../store'

const UserStatsScreen = () => {
  const { showNext } = useContext(store)
  
  return (
    <>
      <article id='content'>
        User Stats
      </article>
      <button id='button' onClick={() => showNext()}>add</button>
    </>
  )
}

export default UserStatsScreen
