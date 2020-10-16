import React from 'react'

import UserMenu from './UserMenu/UserMenu'

import { useAuth } from 'Context/AuthContext'

import g_css from 'App.module.css'
import l_css from './Header.module.css'
const css = {...g_css, ...l_css}

const Header = () => {

  const { isAuth, fetching } = useAuth()

  return (
    <header className={`${css.header}`}>
      <div className={css.wrapper}>
        <img src='https://jasonpallone.com/React-icon.png' alt=''/>
        { isAuth && !fetching && <UserMenu/> }
      </div>
    </header>
  )
}

export default Header