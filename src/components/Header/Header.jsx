import React from 'react'
import g_css from 'App.module.css'
import l_css from './Header.module.css'

const Header = () => {
  const css = {...g_css, ...l_css}

  return (
    <header className={`${css.header}`}>
      <div className={css.wrapper}>
        <img src='https://jasonpallone.com/React-icon.png' alt=''/>
      </div>
    </header>
  )
}

export default Header