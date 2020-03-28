import React from 'react'
import { Button as UIButton } from 'semantic-ui-react'

import './Button.scss'

type Props = {
  text: string;
  onClick: () => void;
}
const Button = (props: Props) => {
  return (
    <UIButton className='button' onClick={() => props.onClick()}>
      {props.text}
    </UIButton>
  )
}

export default Button
