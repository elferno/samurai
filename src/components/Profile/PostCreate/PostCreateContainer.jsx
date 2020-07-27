import React from 'react'
import PostCreate from './PostCreate'

import {
  setNewPostTextCreator,
  addPostCreator
} from
    'redux/profile-reducer'

const PostCreateContainer = ({ store }) => {

  const newPostText = store.getState().profile.newPostText
  const onAddPost = () => store.dispatch(addPostCreator())
  const onSetNewPostText = (text) => store.dispatch(setNewPostTextCreator(text))

  return <PostCreate
           newPostText={newPostText}
           onAddPost={onAddPost}
           onSetNewPostText={onSetNewPostText}
         />
}

export default PostCreateContainer