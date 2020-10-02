import React from 'react'

import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostCreate from './PostCreate/PostCreate'
import PostList from './PostList/PostList'

const Profile = ({profile, isAuth, ownProfile, addPost, saveProfile, setNewPostText}) => {

  const {follow, followers, friends, ...profileData} = profile.info

  return (
    <>
      <ProfileInfo
        ownProfile={ownProfile}
        isSavingProfile={profile.saving}
        saveProfile={saveProfile}
        {...profileData}
      />

      { isAuth &&
        <PostCreate onSubmit={formData => addPost(formData, 'sendPost')}/>
      }

      <PostList posts={profile.posts}/>
    </>
  )
}

export default Profile