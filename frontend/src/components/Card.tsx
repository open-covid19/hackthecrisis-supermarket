import React from 'react'
import { Card as UICard, Image } from 'semantic-ui-react'

import './Card.scss'
import Button from './Button'

type Props = {
  title?: string;
  message?: string;
  buttonText?: string;
  image?: string;
  handleCardAction?: () => void;
  id?: string;
}

const Card = (props: Props) => {
  return (
    <UICard id={props.id} className="card">
      {props.image && <Image floated="left" src={props.image} />}
      {props.title && <UICard.Header as='h1'>{props.title}</UICard.Header>}
      <UICard.Content>
        <UICard.Description as='p'>{props.message}</UICard.Description>
      </UICard.Content>
      {props.handleCardAction && <Button onClick={props.handleCardAction} text={props.buttonText ? props.buttonText : 'OK'} />}
    </UICard>
  )
}

export default Card
