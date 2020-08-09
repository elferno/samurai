import React from 'react'
import { NavLink } from 'react-router-dom'

import g_css from 'App.module.css'
import l_css from './NavBar.module.css'

const css = {...g_css, ...l_css}
const act = {'activeClassName' : css.active_link}

const NavBar = () => {
  return (
    <nav className={`${css.bar} ${css.block} ${css.default_a}`}>
      <NavLink to='/profile' exact {...act}>Profile</NavLink>
      <NavLink to='/dialogs'  {...act}>Dialogs</NavLink>
      <NavLink to='/news'     {...act}>News</NavLink>
      <NavLink to='/music'    {...act}>Music</NavLink>

      <NavLink to='/users' className={css.offset} {...act}>Find user</NavLink>

      <NavLink to='/settings' className={css.offset} {...act}>Settings</NavLink>
    </nav>
  )
}

export default NavBar