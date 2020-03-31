import React from 'react'
import { Header } from 'semantic-ui-react'
import { List, Message } from '../components'

const UserStatsScreen = () => {
  const items = [
    { value: 'Are you over 50 years old?' },
    { value: 'Are you employed in the care sector?' },
    { value: 'Are you employed in the medical sector?' }
  ]
  return (
    <article id="container">
      <Header id="header" as="h1">About yourself</Header>
      <Message id="message" message="<p>The following details aim to personalise your suggested timeslot based on your personal circumstances. </p>
<p>Please try to be as honest as possible. Our algorithm, and chances of ending the pandemic, relies on trust. </p>
" />
      <List
        id="card"
        items={items}
      />
    </article>
  )
}

export default UserStatsScreen
