import React from 'react'

import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostCreate from './PostCreate/PostCreate'
import PostList from './PostList/PostList'

const Profile = ({state, addPost, isAuth, setNewPostText}) => {
  return (
    <>
      <ProfileInfo {...state.info} />

      {
        isAuth && <PostCreate
          addPost={addPost}
          setNewPostText={setNewPostText}
          newPostText={state.newPostText}
        />
      }

      <PostList posts={state.posts}/>
    </>
  )
}

export default Profile