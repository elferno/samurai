import React from 'react'
import { NavLink } from 'react-router-dom'

import noImageSRC from 'assets/images/no_avatar.png'

import g_css from 'App.module.css'
import l_css from './User.module.css'

const css = {...g_css, ...l_css}

const clickHandler = (e, callBack = false, ...param) => {
  e.preventDefault()
  if (callBack)
    callBack(...param)
}

const User = ({id, name, location, status, followed, photos, toggleFollow}) => {
  return (
    <div className={`${css.block} ${css.user}`}>
      <Avatar id={id} src={photos.small} />
      <UserInfo id={id} name={name} location={location} status={status} />
      <UserSettings id={id} followed={followed} toggleFollow={toggleFollow} />
    </div>
  )
}

const Avatar = ({ id, src }) => {
  return (
    <div className={`${css.avatar} ${css.a_m} ${css.user_img_container}`}>
      <NavLink to={`/profile/${id}`}>
        <img src={src || noImageSRC} alt='' />
      </NavLink>
    </div>
  )
}

const UserInfo = ({ id, name, location, status }) => {
  return(
    <div className={css.user_info_container}>
      <NavLink to={`/profile/${id}`}>
        <b>{name}</b>
      </NavLink>
      <u>{location.country} : {location.city}</u>
      <p>{status || <i className={css.no_status}>no status</i>}</p>
    </div>
  )
}

const UserSettings = ({ id, toggleFollow, followed }) => {
  return (
    <div className={`${css.user_settings_container} ${css.default_a}`}>
      <a href='/#' onClick={(e) => clickHandler(e, toggleFollow, id)}>
        {followed ? 'un-follow' : 'follow'}
      </a>
      <a href='/#' onClick={clickHandler}>set as friend</a>
      <a href='/#' onClick={clickHandler}>send message</a>
    </div>
  )
}

export default User