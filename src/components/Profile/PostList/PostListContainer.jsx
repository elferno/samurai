import React from 'react'
import PostList from './PostList'

const PostListContainer = ({ store }) => {

  return <PostList
           posts={store.getState().profile.posts}
         />
}

export default PostListContainer