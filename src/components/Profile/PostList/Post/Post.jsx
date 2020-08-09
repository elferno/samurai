import React from 'react'

import g_css from 'App.module.css'
import l_css from './Post.module.css'

const css = {...g_css, ...l_css}

const Post = ({id, likes, message}) => {
  return (
    <div
      className={`${css.post} ${css.block}`}
    >
      [ post #{id} ] : [ likes : {likes} ] : [ {message} ]
    </div>
  )
}

export default Post