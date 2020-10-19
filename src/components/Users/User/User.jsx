import React from 'react'
import {NavLink} from 'react-router-dom'

import { useAuth } from 'Context/AuthContext'

import Avatar from 'components/Common/Avatar/Avatar'

import g_css from 'App.module.css'
import l_css from './User.module.css'


const css = {...g_css, ...l_css}

const clickHandler = (e, callBack = false, ...param) => {
  e.preventDefault()
  if (callBack)
    callBack(...param)
}

const User = (props) => {

  const { isAuth } = useAuth()
  const { id, photos, name, location, status, ...userProps } = props

  return (
    <div className={`${css.block} ${css.user}`}>
      <Avatar id={id} avatar={photos.avatar} size={'medium'}/>
      <UserInfo id={id} name={name} location={location} status={status}/>
      {
        isAuth
          ? <UserSettings id={id} {...userProps}/>
          : <UserSettingsFiller/>
      }
    </div>
  )
}

const UserInfo = (props) => {
  return (
    <div className={css.user_info_container}>
      <NavLink to={`/profile/${props.id}`}>
        <b>{props.name} : {props.id}</b>
      </NavLink>
      <u>{props.location.country} : {props.location.city}</u>
      <p>{props.status || <i className={css.no_status}>no status</i>}</p>
    </div>
  )
}

const UserSettings = (props) => {

  const id = props.id
  const isFriend = props.friendsList.includes(id)
  const f_iSLoading = props.friendIsFetching.includes(id)

  const is_I_Follow = props.followList.includes(id)
  const i_f_iSLoading = props.followIsFetching.includes(id)

  return (
    <div className={`${css.user_settings_container} ${css.default_a}`}>
      <FetchingA
        click={(e) => clickHandler(e, props.setFollowTo, id, !is_I_Follow)}
        isLoading={i_f_iSLoading}
        isOn={is_I_Follow}
        onContent='un-follow'
        offContent='follow'
      />

      <FetchingA
        click={(e) => clickHandler(e, props.setFriendTo, id, !isFriend)}
        isLoading={f_iSLoading}
        isOn={isFriend}
        onContent='un-friend'
        offContent='set as friend'
      />

      <a href='/#' onClick={clickHandler}>send message</a>
    </div>
  )
}

const FetchingA = ({click, isLoading, isOn, onContent, offContent}) => {

  const onClick = isLoading ? clickHandler : click,
        classNM = isLoading ? css.handling : isOn ? css.selected : null,
        content = isOn ? onContent : offContent

    return <a href='/#' onClick={onClick} className={classNM}>{content}</a>
}

const UserSettingsFiller = () => {
  return (
    <div className={`${css.user_settings_container} ${css.default_a}`}
         style={{background: 'var(--gray)', opacity: '.5'}}/>
  )
}

export default User