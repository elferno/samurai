import React from 'react'

import MessagesContainer from './Messages/MessagesContainer'
import EditorContainer from './Editor/EditorContainer'
import DialogListContainer from './DialogList/DialogListContainer'

import g_css from 'App.module.css'
import l_css from './Dialogs.module.css'

const Dialogs = ({ store }) => {
  const css = {...g_css, ...l_css}

  return (
    <div className={css.wrapper}>
      <MessagesContainer store={store} />
      <EditorContainer store={store} />
      <DialogListContainer store={store} />
    </div>
  )
}

export default Dialogs