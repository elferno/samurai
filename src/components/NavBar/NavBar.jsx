import React from 'react'
import { NavLink } from 'react-router-dom'

import LoginBlockContainer from 'components/Common/LoginBlock/LoginBlockContainer'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import g_css from 'App.module.css'
import l_css from './NavBar.module.css'

const css = {...g_css, ...l_css}
const act = {'activeClassName': css.active_link}

const NavBar = ({ auth }) => {
  return (
    <nav className={`${css.bar} ${css.block} ${css.default_a} ${css.cc}`}>
      <PreloadContent
        isLoading={auth.userID === null || auth.fetching}
        noContent={auth.userID === false}
        noContentFiller={<LoginBlockContainer/>}
        clearContent={true}
      >
        <div className={css.container}>
          <NavLink to='/profile' exact {...act}>Profile</NavLink>
          <NavLink to='/dialogs' {...act}>Dialogs</NavLink>
          <NavLink to='/news' {...act}>News</NavLink>
          <NavLink to='/music' {...act}>Music</NavLink>

          <NavLink to='/settings' className={css.offset} {...act}>Settings</NavLink>
        </div>
      </PreloadContent>
    </nav>
  )
}

export default NavBar