import React from 'react'

import g_css from 'App.module.css'
import l_css from './User.module.css'

import noImageSRC from 'assets/images/no_avatar.png'

const User = ({ id, name, location, status, followed, photos, onToggleFollow }) => {

  const css = {...g_css, ...l_css}

  const style = {
    img: {
        'float': 'left',
        'maxHeight': '50px',
        'borderRadius': '100%',
        'marginRight': 'var(--mm)'
      },
    i: {'float': 'right'},
    p: {'marginTop': 'var(--mm)'},
    div: {
      'float': 'right',
      'marginTop': '-30px'
    },
    noStatus: {
      'color': '#BBB',
      'font': 'var(--ff-small)',
      'fontStyle': 'italic'
    }
  }

return (
  <div className={css.block}>
    <img src={photos.small || noImageSRC} alt="" style={style.img}/>
    <b>{name}</b>
    <i style={style.i}>{location.country} : {location.city}</i>
    <p style={style.p}>{status || <i style={style.noStatus}>no status</i>}</p>
    <div
      style={style.div}
      className={css.button}
      onClick={() => onToggleFollow(id)}
    >
      {followed ? 'UN-FOLLOW' : 'FOLLOW'}
    </div>
  </div>
)
}

export default User