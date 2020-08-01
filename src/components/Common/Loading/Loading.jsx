import React from 'react'

import g_css from 'App.module.css'
import l_css from './Loading.module.css'

const Loading = () => {
  const css = { ...g_css, ...l_css }

  return (
    <div className={css.wrapper}>
      <div className={css.dot} />
    </div>
  )
}

export default Loading