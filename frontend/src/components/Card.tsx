import React from 'react'

import Button from './Button'

import './Card.scss'

type Props = {
  title?: string;
  subTitle?: string;
  message?: string;
  children?: any;
  buttonText?: string;
  image?: string;
  handleCardAction?: () => void;
  id?: string;
}

const Card = (props: Props) => {
  return (
    <div id={props.id} className="card">
      <div className="card__container">
        {props.image && <img src={props.image} />}
        {props.title && <div>
          <h1>{props.title}</h1>
          {props.subTitle && <span className="subtitle">{props.subTitle}</span>}
        </div>}
        <div>
          {props.children}
        </div>
      </div>
      {props.handleCardAction && <div className='card__button'><Button onClick={props.handleCardAction} text={props.buttonText ? props.buttonText : 'OK'} /></div>}
    </div>
  )
}

export default Card
