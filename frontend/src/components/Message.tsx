import React from 'react'
import { Message as UIMessage } from 'semantic-ui-react'

import './Message.scss'

type Props = {
  message: string;
  id?: string;
}
const Message = (props: Props) => {
  return (
    <UIMessage compact id={props.id} className="message">
      <p>{props.message}</p>
    </UIMessage>
  )
}

export default Message
