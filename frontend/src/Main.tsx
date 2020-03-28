import React, { useEffect, useState } from 'react'

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

/**
 * TODO: fill store with local storage items so the above checks can be executed >< loading in the meantime
 * TODO: translations?
 */

enum ButtonOrientation {
   Down = 'down',
   Right = 'right'
}

const Main = () => {
  const [pageIndex, setPageIndex] = useState<number>(0)
  const defaultButtonProps = { isVisible: true, orientation: ButtonOrientation.Right }
  const [buttonProps, setButtonProps] = useState<{ isVisible: boolean; orientation: ButtonOrientation}>(defaultButtonProps)

  useEffect(() => {
    if (pageIndex === screens.length - 1) {
      setButtonProps({ ...buttonProps, isVisible: false })
    } else if (pageIndex === 2 || pageIndex === 5) {
      setButtonProps({ ...buttonProps, orientation: ButtonOrientation.Down })
    } else {
      setButtonProps(defaultButtonProps)
    }
  }, [pageIndex])

  const showNext = (index?: number) => setPageIndex(index || pageIndex + 1)

  const Component = screens[pageIndex]
  return (
    <store.Provider value={{ showNext, clientData: {} as request.clientData }}>
      <Component />
      {buttonProps.isVisible && <button id='button' onClick={() => showNext()}>{buttonProps.orientation}</button>}
    </store.Provider>
  )
}

export default Main
