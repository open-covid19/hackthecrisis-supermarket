import React, { useEffect, useState } from 'react'

import store from './store'
import Main from './Main'
import screens from './screens'

import './App.scss'
import { request } from './models'
import icons from './assets/icons'

enum ButtonOrientation {
  Down = 'down',
  Right = 'right'
}

function App () {
  const [pageIndex, setPageIndex] = useState<number>(0)
  const defaultButtonProps = { isVisible: true, orientation: ButtonOrientation.Right }
  const [buttonProps, setButtonProps] = useState<{ isVisible: boolean; orientation: ButtonOrientation}>(defaultButtonProps)

  useEffect(() => {
    if (pageIndex === screens.length - 1 || pageIndex === 0 || pageIndex === 1 || pageIndex === 3) {
      setButtonProps({ ...buttonProps, isVisible: false })
    } else if (pageIndex === 5) {
      setButtonProps({ isVisible: true, orientation: ButtonOrientation.Down })
    } else {
      setButtonProps(defaultButtonProps)
    }
  }, [pageIndex])

  const showNext = (index?: number) => setPageIndex(index || pageIndex + 1)

  return (
    <store.Provider value={{ showNext, clientData: {} as request.clientData }}>
      <main className="App">
        <header>Spread the Queue</header>
        <section className="App__main">
          <Main pageIndex={pageIndex} />
        </section>
        <footer>
          {
            buttonProps.isVisible &&
        <div id='button'>
          <button onClick={() => showNext()}>
            <img src={buttonProps.orientation === ButtonOrientation.Right ? icons.arrowRight : icons.arrowDown} />
          </button>
        </div>
          }
        </footer>
      </main>
    </store.Provider>
  )
}

export default App
