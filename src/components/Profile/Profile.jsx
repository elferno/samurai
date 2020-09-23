import React from 'react'

import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostCreate from './PostCreate/PostCreate'
import PostList from './PostList/PostList'

const Profile = ({state, isAuth, ownProfile, addPost, saveProfile, setNewPostText}) => {

  const {follow, followers, friends, ...profileData} = state.info

  return (
    <>
      <ProfileInfo
        ownProfile={ownProfile}
        isSavingProfile={state.saving}
        saveProfile={saveProfile}
        {...profileData}
      />

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