import React from 'react'
import { NavLink } from 'react-router-dom'

import Friend from './Friend/Friend'

import g_css from 'App.module.css'
import l_css from './FriendsBar.module.css'

const css = {...g_css, ...l_css}

const FriendsBar = ({ friends, maxFriendsShow }) => {

  const friendList = friends
                      .slice(0, maxFriendsShow)
                      .map(friend => <Friend key={friend.id} {...friend}/>)

  return (
    <aside className={`${css.bar} ${css.block}`}>
      <div className={css.block_label}>
        <div className={css.num_label}><b>{friends.length}</b></div>
        <NavLink to='/friends' activeClassName={css.active_link}>My friends</NavLink>
      </div>

      <div className={css.wrapper}>
        { friendList }
      </div>
    </aside>
  )
}

export default FriendsBar