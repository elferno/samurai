import React from 'react'
import { NavLink } from 'react-router-dom'

import g_css from 'App.module.css'
import l_css from './UsersSearch.module.css'
const css = {...g_css, ...l_css}

const UsersSearch = () => {
  return (
    <div className={`${css.block} ${css.container}`}>
      <NavLink to='/users' activeClassName={css.active_link}>Find user</NavLink>
    </div>
  )
}

export default UsersSearch