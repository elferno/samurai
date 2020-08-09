import React from 'react'

import noImageSRC from 'assets/images/no_avatar.png'

import g_css from 'App.module.css'
import l_css from './ProfileInfo.module.css'

const css = {...g_css, ...l_css}

const ProfileInfo = ({ dob, name, location, contacts, education, photos }) => {
  return (
    <>
      <Banner src={photos.big} />

      <div className={`${css.intro} ${css.block}`}>
        <Avatar src={photos.small} />
        <UserInfo
          dob={dob}
          name={name}
          location={location}
          contacts={contacts}
          education={education}
        />
        <Statistics />
      </div>
    </>
  )
}

const Banner = ({ src }) => {
  if (src)
    return <div
      className={`${css.banner} ${css.block}`}
      style={{'backgroundImage': `URL('${src}')`}}
    />

  return null
}

const Avatar = ({ src }) => {
  return (
    <div className={`${css.avatar} ${css.a_l} ${css.img_container}`}>
      <img src={src || noImageSRC} alt='' />
    </div>
  )
}

const UserInfo = ({ dob, name, location, contacts, education }) => {

  const webSite = contacts.website
    ? <a
        href={contacts.website}
        target='_blank'
        rel='noopener noreferrer'
        className={`${css.inline_a} ${css.colored_a}`}
      >
        {contacts.website}
      </a>
    : 'none'

  return (
    <div className={css.info}>
      <h1 className={css.ff_header}>{name}</h1>

      <div>
        <p>Date of birth: {dob}</p>
        <p>City: {location.city}</p>
        <p>Education: {education || 'none'}</p>
        <p> Web-site: {webSite}</p>
      </div>
    </div>
  )
}

const Statistics = () => {
  return (
    <div className={css.stats}>
      <div className={`${css.cc_inline} ${css.stats_container}`}>
        статистика
      </div>
    </div>
  )
}

export default ProfileInfo