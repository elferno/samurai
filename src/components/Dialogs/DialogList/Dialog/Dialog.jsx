import React from 'react'
import {NavLink} from 'react-router-dom'

import g_css from 'App.module.css'
import l_css from './Dialog.module.css'

const css = {...g_css, ...l_css}

const Dialog = ({id, name, active = false}) => {
  const stats = {
    'to' : '/dialogs/' + id
  }

  if (active)
    stats.className = css.active_link

  return (
    <NavLink {...stats}>{name}</NavLink>
  )
}

export default Dialog