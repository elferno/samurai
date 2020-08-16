import React from 'react'

import g_css from 'App.module.css'
import l_css from './Hello.module.css'

const css = {...g_css, ...l_css}

const Hello = () => {
  return (
    <div className={`${css.block} ${css.cc} ${css.hello}`}>
      <h1>Greetings stranger!</h1>
      <p>This is a social network react-rookie-app</p>
      <p>Please show some mercy to the poor creature trying to do this well</p>
    </div>
  )
}

export default Hello