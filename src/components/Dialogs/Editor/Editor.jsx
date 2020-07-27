import React from 'react'

import g_css from 'App.module.css'
import l_css from './Editor.module.css'

const Editor = ({ newMessageText, onAddMessage, onSetNewMessageText }) => {

  const css = {...g_css, ...l_css}

  const newMessage = {
    textarea: {
      className: css.add_text,
      value: newMessageText,
      onChange: (e) => onSetNewMessageText(e.target.value)
    },

    button: {
      className: `${css.button} ${css.add_button}`,
      onClick: onAddMessage
    }
  }

  return (
    <div className={`${css.block} ${css.editor}`}>
      <textarea {...newMessage.textarea} />
      <div {...newMessage.button}>SEND MESSAGE</div>
    </div>
  )
}

export default Editor