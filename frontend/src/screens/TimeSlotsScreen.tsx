import React, { useContext, useState } from 'react'
import { Header } from 'semantic-ui-react'

import { List } from '../components'
import store from '../store'
import { getRandomSlot } from '../functions/weights'
import { dateUtils, storageUtils } from '../utils'
import { request, storage } from '../models'

const TimeSlotsScreen = () => {
  const { goToNextPage, clientData } = useContext(store)
  const [dateStrings] = useState<string[]>([
    getRandomSlot(),
    getRandomSlot(),
    getRandomSlot()
  ])

  const items = [
    dateUtils.getHourAndDateString(dateStrings[0]),
    dateUtils.getHourAndDateString(dateStrings[1]),
    dateUtils.getHourAndDateString(dateStrings[2])
  ].sort((x, y) => parseFloat(x.time.split(':')[0]) - parseFloat(y.time.split(':')[0]))

  const handleSelection = (index: number) => {
    const voucher: request.VoucherInfo = {
      date: items[index].time, venueName: clientData.venue.venueName, venueLocation: clientData.venue.venueLocation
    }

    storageUtils.setItem(storage.Key.Voucher, voucher)
    goToNextPage()
  }

  return (
    <article id="container">
      <Header id="header" as="h1">Most appropriate time slots</Header>
      <List
        clickable
        id="card"
        items={items}
        onClick={(i: number) => handleSelection(i)}
      />
    </article>
  )
}

export default TimeSlotsScreen
