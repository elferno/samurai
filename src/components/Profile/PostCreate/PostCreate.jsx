import React from 'react'

import g_css from 'App.module.css'
import l_css from './PostCreate.module.css'

const css = {...g_css, ...l_css}

const PostCreate = ({ newPostText, addPost, setNewPostText }) => {
  const localState = {
    textarea: {
      className: css.add_text,
      value: newPostText,
      onChange: (e) => setNewPostText(e.target.value)
    },

    error: {
      className: `${css.add_error} ${css.cc}`
    },

    button: {
      className: `${css.button} ${css.add_button}`,
      onClick: addPost
    }
  }

  return (
    <div className={css.block}>
      <div className={css.block_label}>CREATE NEW POST</div>

      <div className={css.post_create}>
        <textarea {...localState.textarea} />
        <div {...localState.error} />
        <div {...localState.button}>ADD POST</div>
      </div>
    </div>
  )
}

export default PostCreate