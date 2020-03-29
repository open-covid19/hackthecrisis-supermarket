import { storage, request } from '../models'

const getItem = (key: storage.Key) => {
  const item: string | null = window.localStorage.getItem(key)
  return item && JSON.parse(item)
}

const setItem = (key: storage.Key, item: any) => {
  if (key === storage.Key.Voucher) {
    let storedItemArray = getItem(key) ? getItem(key) : []
    storedItemArray = [...storedItemArray, item]
    window.localStorage.setItem(key, JSON.stringify(storedItemArray))
    // }
  } else {
    window.localStorage.setItem(key, JSON.stringify(item))
  }
}

const removeItem = (key: storage.Key) => {
  window.localStorage.removeItem(key)
}

const removeVoucher = (index: number): request.VoucherInfo[] => {
  const voucherArray = getItem(storage.Key.Voucher)
  voucherArray.splice(index, 1)
  window.localStorage.setItem(storage.Key.Voucher, JSON.stringify(voucherArray))
  return getItem(storage.Key.Voucher)
}

export { getItem, removeItem, removeVoucher, setItem }
