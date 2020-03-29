import { isAfter } from 'date-fns'
import { storage, request } from '../models'
import { storageUtils } from '.'

export default () => {
  let stored = { voucher: [] as request.VoucherInfo[] }
  Object.values(storage.Key).map(key => {
    stored = { ...stored, [`${key}`]: storageUtils.getItem(key) }
  })

  if (stored.voucher.length) {
    stored.voucher.map((element, index) => {
      if (isAfter(new Date(), new Date(element.date))) {
        storageUtils.removeVoucher(index)
      }
    })
  }
  return stored
}
