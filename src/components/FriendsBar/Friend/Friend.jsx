import React from 'react'
import {NavLink} from 'react-router-dom'

import Avatar from 'components/Common/Avatar/Avatar'

import g_css from 'App.module.css'
import l_css from './Friend.module.css'

const css = {...g_css, ...l_css}

const Friend = ({id, name, avatar}) => {
  return (
    <div className={css.friend}>
      <Avatar id={id} avatar={avatar} size={'mini'}/>

      <NavLink to={`/profile/${id}`}>
        <b>{name}</b>
      </NavLink>
    </div>
  )
}

export default Friend