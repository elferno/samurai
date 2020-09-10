import React from 'react'
import {NavLink} from 'react-router-dom'

import Friend from './Friend/Friend'
import AdvBar from 'components/Common/AdvBar/AdvBar'

import css from 'App.module.css'

const FriendsBar = (props) => {

  const { totalFriends, totalFollowers = 0, totalFollow } = props

  return (
    <>
      <aside className={`${css.block} ${css.left_bar}`}>
        {
          props.auth.isAuth
            ? <Links tFR={totalFriends} tFS={totalFollowers} tFL={totalFollow}/>
            : <AdvBar id={0}/>
        }
      </aside>

      <aside className={`${css.block} ${css.left_offset}`}>
        {
          props.totalFriends
            ? <FriendList friends={props.friends}/>
            : <AdvBar id={1}/>
        }
      </aside>
    </>
  )
}

const FriendList = ({friends}) => {
  return friends.map(friend => <Friend key={friend.id} {...friend}/>)
}

const Links = ({tFR, tFS, tFL}) => {
  return (
    <>
      <div className={css.num_label}>
        <NavLink to='/friends' activeClassName={css.active_link}>My friends</NavLink>
        <div><b>{tFR}</b></div>
      </div>

      <div className={css.num_label}>
        <NavLink to='/followers' activeClassName={css.active_link}>My followers</NavLink>
        <div><b>{tFS}</b></div>
      </div>

      <div className={css.num_label}>
        <NavLink to='/follow' activeClassName={css.active_link}>I follow</NavLink>
        <div><b>{tFL}</b></div>
      </div>
    </>
  )
}


export default FriendsBar