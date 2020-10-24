import React from 'react'
import error_404 from 'assets/images/error_404.png'
import css from 'App.module.css'

const Error404 = ({withBox = false}) => {

  const img = <img src={error_404} style={{maxHeight: '300px'}} alt='' />

  if (withBox)
    return <div className={`${css.block} ${css.before_content} ${css.cc}`}>{img}</div>

  return img
}

export default Error404