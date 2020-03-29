import React from 'react'
import { Checkbox } from 'semantic-ui-react'

import './List.scss'

type Props = {
  clickable?: boolean;
  items: Item[];
  id: string;
  onClick?: () => void;
}

type Item = {
  message: string;
  buttonType?: string;
}

const List = (props: Props) => {
  return (
    <ul id={props.id} className='list'>
      {props.clickable
        ? props.items.map((item, index) => {
          return (
            <li key={index} className='list__item list__item--non-clickable'>
              <button onClick={props.onClick}>{item.message}</button>
            </li>
          )
        })
        : props.items.map((item, index) => {
          return (
            <li key={index} className='list__item list__item--clickable'>
              {item.message}
              <Checkbox toggle />
            </li>
          )
        })
      }
    </ul>
  )
}

export default List
