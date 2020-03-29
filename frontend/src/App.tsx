import React, { useEffect, useState } from 'react'

import store from './store'
import Main from './Main'
import screens from './screens'
import { request } from './models'
import icons from './assets/icons'
import { startupCheck } from './utils'
import { data } from './data/storage'

import './App.scss'

enum ButtonOrientation {
  Down = 'down',
  Right = 'right'
}

function App () {
  const [pageIndex, setPageIndex] = useState<number>(0)
  const defaultButtonProps = { isVisible: false, orientation: ButtonOrientation.Right }
  const [buttonProps, setButtonProps] = useState<{ isVisible: boolean; orientation: ButtonOrientation}>(defaultButtonProps)
  const [clientData, setClientData] = useState<request.clientData>(data)

  useEffect(() => {
    const stored = startupCheck()

    setClientData({ ...clientData, ...stored })
  }, [])

  useEffect(() => {
    if (clientData.voucher?.length) {
      setPageIndex(screens.length - 1)
    }
  }, [clientData])

  useEffect(() => {
    if (pageIndex === 3 || pageIndex === 4) {
      setButtonProps({ ...buttonProps, isVisible: true })
    } else {
      setButtonProps(defaultButtonProps)
    }
  }, [pageIndex])

  const goToNextPage = (index?: number) => {
    setPageIndex(index !== undefined ? index : (pageIndex + 1))
  }

  return (
    <store.Provider value={{ goToNextPage, clientData, setClientData }}>
      <main className="App">
        <header>Spread the Queue</header>
        <section className="App__main">
          <Main pageIndex={pageIndex} />
        </section>
        <footer>
          {
            buttonProps.isVisible &&
        <div id='button'>
          <button onClick={() => goToNextPage()}>
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
