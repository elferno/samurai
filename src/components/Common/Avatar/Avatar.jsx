import React from 'react'
import {NavLink} from 'react-router-dom'

import noImageSRC from 'assets/images/no_avatar.png'
import Upload from 'components/Common/Upload/Upload'

import g_css from 'App.module.css'
import l_css from './Avatar.module.css'

const css = {...g_css, ...l_css}

const Avatar = ({id, avatar, size, shadow = false, editable = false, submitFile = false}) => {

  // var
  let src = noImageSRC
  if (avatar)
    src = `https://fishup.fun/api/users/${id}/${avatar}.png`

  const className = `
    ${css.avatar}
    ${sizeToClass(size)}
    ${shadow ? css.shadow_inset : null}
    ${editable ? css.avatar_editable : null}
  `
  //


  // content
  let content = <NavLink to={`/profile/${id}`}><img src={src} alt=''/></NavLink>

  if (size === 'large')
    content = <img src={src} alt=''/>

  if (editable)
    content =
      <>
        <Upload
          submitFile={submitFile}
          uploadText='UPLOAD AVATAR'
          removeText='DELETE AVATAR'
          className={`${css.avatar_edit} ${css.cc}`}
          loadingClassName={css.avatar_fixed}
        />
        <img src={src} alt=''/>
      </>
  //


  // render
  return (
    <div className={className} role='img'>
      {content}
    </div>
  )
  //
}

const sizeToClass = (size) => {
  switch (size) {
    case 'mini'  : return css.a_z
    case 'small' : return css.a_s
    case 'medium': return css.a_m
    case 'large' : return css.a_l
    default      : return null
  }
}

export default Avatar