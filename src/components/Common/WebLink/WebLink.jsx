import React from 'react'

import css from 'App.module.css'

const WebLink = ({website, noContent}) => {
  return (website
    ? <a
      href={website}
      target='_blank'
      rel='noopener noreferrer'
      className={`${css.inline_a} ${css.colored_a}`}
    >
      active link
    </a>
    : noContent)
}

export default WebLink