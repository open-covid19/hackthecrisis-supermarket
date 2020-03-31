import React from 'react'
import { Button as UIButton } from 'semantic-ui-react'

import './IconButton.scss'

type Props = {
  onClick: () => void;
  icon: any;
  label: string;
}
const IconButton = (props: Props) => {
  return (
    <UIButton className="iconButton animated vertical" onClick={() => props.onClick()}>
      <UIButton.Content className="hidden">{props.label}</UIButton.Content>
      <UIButton.Content className="visible"><img src={props.icon} /></UIButton.Content>
    </UIButton>
  )
}

export default IconButton
