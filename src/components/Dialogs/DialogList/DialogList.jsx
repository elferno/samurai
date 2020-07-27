import React from 'react'
import Dialog from './Dialog/Dialog'

import g_css from 'App.module.css'
import l_css from './DialogList.module.css'

const DialogList = ({ contacts }) => {

  const css = {...g_css, ...l_css}
  const contactList = contacts.map(contact => <Dialog key={contact.id} {...contact}/>)

  return (
    <div className={`${css.dialogs} ${css.block}`}>
      { contactList }
    </div>
  )
}

export default DialogList