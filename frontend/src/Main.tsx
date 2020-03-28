import React from 'react'

import screens from './screens'

/**
 * 0. Is there a time slot still valid (cookie, local storage)? Show it.
 * 1. Has privacy policy been accepted? (cookie / local storage)
    * Yes, go to next check. No, show privacy screen
 * 2. Have disclaimers been read? (cookie / local storage)
    * Yes, go to next check. No, show disclaimers
*/

/**
 *
 * Go over following checks:
    * Go to location screen. Check local storage for location, otherwise ask
    * Has location? Go to next screen... and so on.
 */

/**
 * TODO: fill store with local storage items so the above checks can be executed >< loading in the meantime
 * TODO: translations?
 */

const Main = ({ pageIndex }: {pageIndex: number}) => {
  const Screen = screens[pageIndex]
  return (
    <Screen />
  )
}

export default Main
