import React from 'react'

import g_css from 'App.module.css'
import l_css from './Loading.module.css'

const css = {...g_css, ...l_css}

const Loading = () => {
  return (
    <div className={`${css.block} ${css.before_content} ${css.cc} ${css.hide_a_sec}`}>
      <LoadingIcon/>
    </div>
  )
}

export const LoadingIcon = () => {
  return (
    <div role='img' className={css.wrapper}>
      <div className={css.dot}/>
    </div>
  )
}

export const TransparentLoading = () => {
  return (
    <div
      style={{height: 'calc(100% - var(--mm))'}}
      className={`${css.cc} ${css.hide_a_sec}`}
    >
      <LoadingIcon/>
    </div>
  )
}

export default Loading