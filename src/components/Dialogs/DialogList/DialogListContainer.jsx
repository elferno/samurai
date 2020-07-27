import React from 'react'

import DialogList from './DialogList'

const DialogListContainer = ({ store }) => {

  const contacts = store.getState().dialogs.contacts

  return <DialogList
           contacts={contacts}
         />
}

export default DialogListContainer