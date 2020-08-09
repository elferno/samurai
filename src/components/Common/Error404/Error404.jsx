import React from 'react'

import css from 'App.module.css'
import error_404 from 'assets/images/error_404.png'

const Error404 = () => {
  return (
    <div className={`${css.block} ${css.before_content} ${css.cc}`}>
      <img src={error_404} alt='' />
    </div>
  )
}

export default Error404