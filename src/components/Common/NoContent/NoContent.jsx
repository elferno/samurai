import React from 'react'

import css from 'App.module.css'

const NoContent = ({children}) => {
  return (
    <div className={`${css.block} ${css.before_content} ${css.cc}`}>
      {children}
    </div>
  )
}

export default NoContent