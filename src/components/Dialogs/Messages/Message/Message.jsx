import React from 'react'

import g_css from 'App.module.css'
import l_css from './Message.module.css'

const css = {...g_css, ...l_css}

const Message = ({text}) => {
  return (
    <div className={css.message}>{text}</div>
  )
}

export default Message