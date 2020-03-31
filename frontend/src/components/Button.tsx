import React from 'react'
import { Button as UIButton } from 'semantic-ui-react'

import './Button.scss'

type Props = {
  text: string;
  onClick: () => void;
  name?: string;
}
const Button = (props: Props) => {
  return (
    <UIButton className={`button ${props.name}`} onClick={() => props.onClick()}>
      {props.text}
    </UIButton>
  )
}

export default Button
