import React from 'react'

import css from 'App.module.css'
import { NavLink } from 'react-router-dom'

import noImageSRC from 'assets/images/no_avatar.png'

const Avatar = ({ id, havePH, size, shadow = false }) => {

  let src = noImageSRC
  if (havePH)
    src = `https://fishup.fun/api/users/${id}/avatar.png`

  return (
    <div
      className={`${css.avatar} ${sizeToClass(size)} ${shadow ? css.shadow_inset : null}`}
      role='img'
    >
      <NavLink to={`/profile/${id}`}>
        <img src={src} alt='' />
      </NavLink>
    </div>
  )
}

const sizeToClass = (size) => {
  switch (size) {
    case 'mini'  : return css.a_z
    case 'small' : return css.a_s
    case 'medium': return css.a_m
    case 'large' : return css.a_l
    default: return null
  }
}

export default Avatar