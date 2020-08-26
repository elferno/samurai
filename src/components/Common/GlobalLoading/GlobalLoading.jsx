import React from 'react'

import g_css from 'App.module.css'
import l_css from './GlobalLoading.module.css'
import{  LoadingIcon } from 'components/Common/Loading/Loading'

const css = {...g_css, ...l_css}

const GlobalLoading = ({ hide }) => {
  return (
    <div className={`${css.cover} ${hide ? css.cover_hide : null}`}>
      <LoadingIcon/>
    </div>
  )
}

export default GlobalLoading