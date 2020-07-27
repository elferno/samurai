import React from 'react'
import Messages from './Messages'

const MessagesContainer = ({ store }) => {

  const messages = store.getState().dialogs.messages

  const messagesBlockStyle = () => {
    const screenH = window.innerHeight
                    || document.element.clientHeight
                    || document.body.clientHeight;
    return { 'minHeight' : screenH - (50 + 132 + 16 * 3) }
  }

  return <Messages
           messagesBlockStyle={messagesBlockStyle()}
           messages={messages}
         />
}

export default MessagesContainer