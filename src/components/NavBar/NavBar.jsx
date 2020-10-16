import React from 'react'
import { NavLink } from 'react-router-dom'

import Login from 'components/Common/LoginBlock/Login'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import { useAuth } from 'Context/AuthContext'

import g_css from 'App.module.css'
import l_css from './NavBar.module.css'

const css = {...g_css, ...l_css}
const act = {'activeClassName': css.active_link}

const NavBar = () => {

  const { isAuth, fetching, login, setLoginError } = useAuth()
  const onSubmit = formData => {
    const {login: lg, pass, stay = 1} = formData
    login(lg, pass, stay ? 1 : 0)
  }

  return (
    <nav className={`${css.bar} ${css.block} ${css.default_a} ${css.cc} ${css.cc_column}`}>
      <PreloadContent
        isLoading={isAuth === null || fetching}
        noContent={isAuth === false}
        noContentFiller={<Login onSubmit={onSubmit} setLoginError={setLoginError}/>}
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