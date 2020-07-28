import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostCreateContainer from './PostCreate/PostCreateContainer'
import PostListContainer from './PostList/PostListContainer'

// import g_css from 'App.module.css'
// import l_css from './Profile.module.css'

const Profile = () => {
  // const css = {...g_css, ...l_css}

  return (
    <React.Fragment>
      <ProfileInfo/>
      <PostCreateContainer/>
      <PostListContainer/>
    </React.Fragment>
  )
}

export default Profile