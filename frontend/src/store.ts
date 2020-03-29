import React from 'react'

import { request } from './models'

type Store = {
  clientData: request.clientData;
  showNext: (i?: number) => void;
}

export default React.createContext({} as Store)
