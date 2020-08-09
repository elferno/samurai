import React from 'react'

import g_css from 'App.module.css'
import l_css from './Editor.module.css'

const css = {...g_css, ...l_css}

const Editor = ({ newMessageText, addMessage, setNewMessageText }) => {
  const newMessage = {
    textarea: {
      className: css.add_text,
      value: newMessageText,
      onChange: (e) => setNewMessageText(e.target.value)
    },

    button: {
      className: `${css.button} ${css.add_button}`,
      onClick: addMessage
    }
  }

  return (
    <div className={`${css.block} ${css.editor}`}>
      <textarea {...newMessage.textarea} />
      <div {...newMessage.button}>SEND<span> MESSAGE</span></div>
    </div>
  )
}

export default Editor