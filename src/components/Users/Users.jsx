import React from 'react'

import User from './User/User'

import g_css from 'App.module.css'
import l_css from './Users.module.css'

const css = {...g_css, ...l_css}

const Users = (props) => {

  const { isLoading, setPageToNext, ...userProps } = props
  const canUploadMore = (props.page * props.limit + props.limit) < props.totalUsers

  return (
    <div className={css.content_wrapper}>
      <UserList {...userProps}/>
      <UploadButton
        isLoading={props.totalUsers !== 0 && isLoading}
        isActive= {props.totalUsers !== 0 && !isLoading && canUploadMore}
        setPageToNext={setPageToNext}
      />
    </div>
  )
}

const UserList = (props) => {
  if (props.totalUsers) {
    const {users, ...passProps} = props;
    return users.map(user => <User key={user.id} {...passProps} {...user} />)
  }

  return null
}

const UploadButton = ({ isLoading, isActive, setPageToNext }) => {
  if (isLoading) {
    return <div className={`${css.button} ${css.lb}`}>LOADING...</div>
  }

  if (isActive) {
    return <div className={`${css.button} ${css.ub}`} onClick={setPageToNext}>UPLOAD MORE</div>
  }

  return null
}

export default Users