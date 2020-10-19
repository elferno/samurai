import React from 'react'

import css from 'App.module.css'

const Banner = ({ id, banner }) => {
  if (banner) {
    const src = {
      'backgroundImage':
        `URL('https://fishup.fun/api/users/${id}/${banner}.jpg')`
    }
    return <div className={css.block} style={src} role='banner'/>
  }

  return null
}

export default Banner

