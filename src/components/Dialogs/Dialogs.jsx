import React from 'react'

import MessagesContainer from './Messages/MessagesContainer'
import EditorContainer from './Editor/EditorContainer'
import DialogListContainer from './DialogList/DialogListContainer'

import g_css from 'App.module.css'
import l_css from './Dialogs.module.css'

const Dialogs = () => {
  const css = {...g_css, ...l_css}

  return (
    <div className={css.wrapper}>
      <MessagesContainer/>
      <EditorContainer/>
      <DialogListContainer/>
    </div>
  )
}

export default Dialogs