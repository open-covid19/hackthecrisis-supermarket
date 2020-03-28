import React, { useState } from 'react'

import store from './store'
import screens from './screens'
import { request } from './models'

/**
 * 0. Is there a time slot still valid (cookie, local storage)? Show it. 
 * 1. Has privacy policy been accepted? (cookie / local storage)
    * Yes, go to next check. No, show privacy screen
 * 2. Have disclaimers been read? (cookie / local storage)
    * Yes, go to next check. No, show disclaimers
*/

/**
 * Go over following checks:
    * Go to location screen. Check local storage for location, otherwise ask
    * Has location? Go to next screen... and so on.
 */ 

const Main = () => {
  const [pageIndex, setPageIndex] = useState<number>(0)

  const showNext = (index?: number) => setPageIndex(index ? index : pageIndex + 1)

  const Component = screens[pageIndex]
  return (
    <store.Provider value={{ showNext, clientData: {} as request.clientData}}>
     <Component />
    </store.Provider>
  )
}

export default Main
