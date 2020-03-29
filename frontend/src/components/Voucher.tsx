import React from 'react'
import { request } from '../models'

import './Voucher.scss'
import icons from '../assets/icons'

type Props = {
  voucher: request.VoucherInfo;
  index: number;
  handleDelete: (index: number) => void;
}
const Voucher = (props: Props) => {
  return (
    <section id="card" className="voucher">
      <h1 className="voucher__title">{props.voucher.venueName}</h1>
      <div className="voucher__content">
        <span className="voucher__content--loc">
          <img src={icons.location} />
          {props.voucher.venueLocation}
        </span>
        <span className="voucher__content--time">{props.voucher.date.split('T')[1]}</span>
      </div>
      <button onClick={() => props.handleDelete(props.index)}><img src={icons.delete} /></button>
    </section>
  )
}

export default Voucher
