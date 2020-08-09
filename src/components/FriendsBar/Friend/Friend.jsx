import React from 'react'
import { NavLink } from 'react-router-dom'

import g_css from 'App.module.css'
import l_css from './Friend.module.css'

const css = {...g_css, ...l_css}

const Friend = ({id, name, avatarSRC}) => {
  return (
    <NavLink to={`/profile/${id}`} className={css.friend}>
      <div className={`${css.avatar} ${css.a_s}`}><img src={avatarSRC} alt='' /></div>
      <b>{name}</b>
    </NavLink>
  )
}

export default Friend