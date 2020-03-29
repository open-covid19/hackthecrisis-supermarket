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
  const defaultButtonProps = { isVisible: false, orientation: ButtonOrientation.Right }
  const [buttonProps, setButtonProps] = useState<{ isVisible: boolean; orientation: ButtonOrientation}>(defaultButtonProps)

  useEffect(() => {
    if (pageIndex === 3 || pageIndex === 4) {
      setButtonProps({ ...buttonProps, isVisible: true })
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
