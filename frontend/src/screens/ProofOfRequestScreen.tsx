import React, { useEffect, useState, useContext } from 'react'

import { Voucher } from '../components'
import { storageUtils } from '../utils'
import { storage, request } from '../models'
import store from '../store'

const ProofOfRequestScreen = () => {
  const { goToNextPage } = useContext(store)
  const [voucherArray, setVouchers] = useState<request.VoucherInfo[]>([])

  useEffect(() => {
    setVouchers(storageUtils.getItem(storage.Key.Voucher))
  }, [])

  const handleDelete = (index: number) => {
    const vouchers = storageUtils.removeVoucher(index)
    if (!vouchers.length) {
      goToNextPage(0)
    }
  }

  return (
    <article id="container">
      <h1 id="header">Your allotted time slots</h1>
      {voucherArray.map((voucher: request.VoucherInfo, index: number) => {
        return (
          <Voucher
            key={voucher.date}
            voucher={voucher}
            index={index}
            handleDelete={handleDelete}
          />
        )
      })
      }
    </article>
  )
}

export default ProofOfRequestScreen
