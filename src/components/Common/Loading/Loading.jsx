import React from 'react'

import g_css from 'App.module.css'
import l_css from './Loading.module.css'

const css = {...g_css, ...l_css}

const Loading = () => {
  return (
    <div className={`${css.block} ${css.before_content} ${css.cc}`}>
      <LoadingIcon />
    </div>
  )
}

export const LoadingIcon = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.dot} />
    </div>
  )
}

export default Loading