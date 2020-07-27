import React from 'react'
import Editor from './Editor'

import {
  setNewMessageTextCreator,
  addMessageCreator
}
from
  'redux/dialogs-reducer'


const EditorContainer = ({ store }) => {

  const newMessageText = store.getState().dialogs.newMessageText
  const onAddMessage = () => store.dispatch(addMessageCreator())
  const onSetNewMessageText = (text) => store.dispatch(setNewMessageTextCreator(text))

  return <Editor
           newMessageText={newMessageText}
           onAddMessage={onAddMessage}
           onSetNewMessageText={onSetNewMessageText}
         />
}

export default EditorContainer