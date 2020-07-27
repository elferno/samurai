import React from 'react'
import { NavLink } from 'react-router-dom'

import g_css from 'App.module.css'
import l_css from './Friend.module.css'

const Friend = ({id, name, avatar}) => {
  const css = {...g_css, ...l_css}

  return (
    <NavLink to={`/profile/${id}`} className={css.friend}>
      <img src={avatar} alt=""/>
      <b>{name}</b>
    </NavLink>
  )
}

export default Friend