import React, { useContext } from 'react'
import store from '../store'

const IntroductionScreen = () => {
  const { showNext } = useContext(store)

  return (
    <>
      <article id='content'>
        <h1>Introduction and Disclaimer</h1>

        <h2>What is this?</h2>
        <p>Spread The Queue enables us to setup a routine for our movements in public spaces, like shops and parks!</p>
        <h2>Why is this important?</h2>
        <p>Sticking to a schedule when going outside helps to flatten the curve for various reasons:</p>
        <ul>
            <li>Peak shaving: the number of people in shops and parks is more evenly distributed</li>
            <li>Reduced queues in front of shops</li>
            <li>Shorter shopping times</li>
            <li>Reduces the variety of people we interact with</li>
        </ul>
        <p>All those aspects have a direct impact on the reproduction number (R0), and thus on the spread of the virus</p>
        <h2>Is this mandatory?</h2>
        <p>Absolutely not! Spread The Queue encourages us to stick to our schedule, although no aspect is mandatory at any point. </p>
        <h2>How does this works exactly?</h2>
        <p>Spread the Queue will steer us towards a schedule made of less busy periods and closeby shops and parks.</p>
        <p>The more we do so the more efficiently we fight Covid-19, and the more we get shopping discount! </p>
        <h2>A note on privacy</h2>
        <p>All data collected and stored by Spread the Queue are kept locally, on the phone itself. No personal information is transferred to central servers at any time.</p>

      </article>
      <button id='button' onClick={() => showNext()}>add</button>
    </>
  )
}

export default IntroductionScreen
