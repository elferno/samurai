import React from 'react'

import withSuspense from 'HOC/withSuspense'

import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostCreate from './PostCreate/PostCreate'

const PostList = React.lazy(() => import('./PostList/PostList'))

const Profile = ({profile, isAuth, ownProfile, addPost, saveProfile, submitFile}) => {

  const {follow, followers, friends, ...profileData} = profile.info

  const posts = withSuspense(PostList)({
    posts: profile.posts
  })

  return (
    <>
      <ProfileInfo
        ownProfile={ownProfile}
        isSavingProfile={profile.saving}
        saveProfile={saveProfile}
        submitFile={submitFile}
        {...profileData}
      />

      {isAuth &&
      <PostCreate onSubmit={formData => addPost(formData, 'sendPost')}/>
      }

      {posts}
    </>
  )
}

export default Profile