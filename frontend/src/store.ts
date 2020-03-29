import React from 'react'

import { request } from './models'

type Store = {
  clientData: request.clientData;
  goToNextPage: (i?: number) => void;
  setClientData: (data: request.clientData) => void;
}

export default React.createContext({} as Store)
