import React from 'react'
import { Checkbox } from 'semantic-ui-react'

import './List.scss'

type Props = {
  clickable?: boolean;
  items: Item[];
  id: string;
}

type Item = {
  message: string;
  buttonType?: string;
}

const List = (props: Props) => {
  if (!props.clickable) {
    return (
      <ul id={props.id} className='list'>
        {props.items.map((item, index) => {
          return (
            <li key={index} className='list__item list__item--clickable'>
              {item.message}
              <Checkbox toggle />
            </li>
          )
        })}
      </ul>
    )
  } else {
    return (
      <ul id={props.id} className='list'>
        {props.items.map((item, index) => {
          return (
            <li key={index} className='list__item list__item--non-clickable'>
              <button>{item.message}</button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default List
