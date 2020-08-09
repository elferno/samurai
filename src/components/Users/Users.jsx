import React from 'react'

import User from './User/User'

import g_css from 'App.module.css'
import l_css from './Users.module.css'

const css = {...g_css, ...l_css}

const Users = ({ page, users, limit, isLoading, totalUsers, setPageToNext, toggleFollow }) => {

  const canUploadMore = (page * limit + limit) < totalUsers

  const localState = {
    button: {
      loading: totalUsers !== 0 && isLoading,
      active : totalUsers !== 0 && !isLoading && canUploadMore,
      setPageToNext
    },

    userList: {
      toggleFollow,
      totalUsers,
      users
    }
  }

  return (
    <div className={css.content_wrapper}>
      <UserList {...localState.userList} />
      <UploadButton {...localState.button} />
    </div>
  )
}

const UserList = ({ users, totalUsers, toggleFollow }) => {
  if (totalUsers) {
    return users.map(user => <User key={user.id} toggleFollow={toggleFollow} {...user} />)
  }

  return null
}

const UploadButton = ({ loading, active, setPageToNext }) => {
  if (loading) {
    return <div className={`${css.button} ${css.loading_button}`}>LOADING...</div>
  }

  if (active) {
    return <div className={`${css.button} ${css.upload_button}`} onClick={setPageToNext}>UPLOAD MORE</div>
  }

  return null
}

export default Users