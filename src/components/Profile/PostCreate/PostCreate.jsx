import React from 'react'

import g_css from 'App.module.css'
import l_css from './PostCreate.module.css'

const PostCreate = ({ newPostText, onAddPost, onSetNewPostText }) => {

  const css = {...g_css, ...l_css}

  const addPost = {
    textarea: {
      className: css.add_text,
      value: newPostText,
      onChange: (e) => onSetNewPostText(e.target.value)
    },

    error: {
      className: `${css.add_error} ${css.cc}`
    },

    button: {
      className: `${css.button} ${css.add_button}`,
      onClick: onAddPost
    }
  }

  return (
    <div className={css.block}>
      <div className={css.block_label}>CREATE NEW POST</div>

      <div className={css.post_create}>
        <textarea {...addPost.textarea} />
        <div {...addPost.error} />
        <div {...addPost.button}>ADD POST</div>
      </div>
    </div>
  )
}

export default PostCreate