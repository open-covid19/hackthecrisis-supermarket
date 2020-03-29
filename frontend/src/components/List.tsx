import React from 'react'
import { Checkbox } from 'semantic-ui-react'

import './List.scss'

type Props = {
  clickable?: boolean;
  items: any[];
  id: string;
  onClick?: (i: number) => void;
}

const List = (props: Props) => {
  if (props.clickable) {
    return (
      <>
        <h1 className="list list__subheader">{props.items[0].date}</h1>
        <ul id={props.id} className='list list__wide'>
          {props.items.map((item, index) => {
            return (
              <li onClick={() => props.onClick && props.onClick(index)} key={index} className='list__item list__item--non-clickable'>
                <p>{item.time}</p>
              </li>
            )
          })
          }
        </ul>
      </>
    )
  } else {
    return (
      <ul id={props.id} className='list'>
        {props.items.map((item, index) => {
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
}

export default List
