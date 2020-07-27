import React from 'react'
import Message from './Message/Message'

import g_css from 'App.module.css'
import l_css from './Messages.module.css'

const Messages = ({ messages, messagesBlockStyle }) => {

  const css = {...g_css, ...l_css}
  const messageList = messages.map(message => <Message key={message.id} {...message}/>)

  return (
    <div className={`${css.messages} ${css.block}`} style={messagesBlockStyle}>
      { messageList }
    </div>
  )
}

export default Messages