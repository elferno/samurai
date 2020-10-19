import React from 'react'
import { NavLink } from 'react-router-dom'

import { useAuth } from 'Context/AuthContext'

import Avatar from 'components/Common/Avatar/Avatar'

import g_css from 'App.module.css'
import l_css from './UserMenu.module.css'
const css = {...g_css, ...l_css}

const UserMenu = () => {
  const { auth, logout } = useAuth()

  const id = auth.userInfo.userID
  const avatar = auth.userInfo.avatar
  const clickHandler = e => { e.preventDefault(); logout() }

  return (
    <div className={css.user_menu}>
      <NavLink to='/profile'>{auth.userInfo.userName}</NavLink>
      <Avatar id={id} avatar={avatar} size={'mini'} shadow={true}/>
      <a href='/#' className={css.logout} onClick={clickHandler}>×</a>
    </div>
  )
}

export default UserMenu