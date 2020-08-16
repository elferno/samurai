import React from 'react'

import UserMenu from './UserMenu/UserMenu'

import g_css from 'App.module.css'
import l_css from './Header.module.css'
const css = {...g_css, ...l_css}

const Header = ({ auth, logout }) => {
  return (
    <header className={`${css.header}`}>
      <div className={css.wrapper}>
        <img src='https://jasonpallone.com/React-icon.png' alt=''/>
        {
          auth.userID && !auth.fetching &&
          <UserMenu auth={auth} logout={logout} />
        }
      </div>
    </header>
  )
}

export default Header