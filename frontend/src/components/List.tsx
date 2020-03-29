import React from 'react'
import { Checkbox } from 'semantic-ui-react'

import './List.scss'

type Props = {
  clickable?: boolean;
  items: Item[];
  id: string;
  onClick?: (i: number) => void;
}

type Item = {
  value: string;
  buttonType?: string;
}

const List = (props: Props) => {
  return (
    <ul id={props.id} className='list'>
      {props.clickable
        ? props.items.map((item, index) => {
          return (
            <li onClick={() => props.onClick && props.onClick(index)} key={index} className='list__item list__item--non-clickable'>
              <button >{item.value}</button>
            </li>
          )
        })
        : props.items.map((item, index) => {
          return (
            <li key={index} className='list__item list__item--clickable'>
              {item.value}
              <Checkbox toggle />
            </li>
          )
        })
      }
    </ul>
  )
}

export default List
