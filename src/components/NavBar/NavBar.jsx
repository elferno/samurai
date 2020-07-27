import React from 'react'
import { NavLink } from 'react-router-dom'

import g_css from 'App.module.css'
import l_css from './NavBar.module.css'

const NavBar = () => {
  const css = {...g_css, ...l_css}
  const act = {'activeClassName' : css.active_link}

  return (
    <nav className={`${css.bar} ${css.block}`}>
      <NavLink to='/profile'  {...act}>Profile</NavLink>
      <NavLink to='/dialogs'  {...act}>Dialogs</NavLink>
      <NavLink to='/news'     {...act}>News</NavLink>
      <NavLink to='/music'    {...act}>Music</NavLink>
      <NavLink to='/settings' {...act}>Settings</NavLink>
    </nav>
  )
}

export default NavBar