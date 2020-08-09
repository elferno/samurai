import React from 'react'

import Post from './Post/Post'

import g_css from 'App.module.css'
import l_css from './PostList.module.css'

const css = {...g_css, ...l_css}

const PostList = ({ posts }) => {

  const postList = posts.map(post => <Post key={post.id} {...post} />)

  return (
    <div className={css.post_list}>
      { postList }
    </div>
  )
}

export default PostList