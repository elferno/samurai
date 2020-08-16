import React from 'react'

import Avatar from 'components/Common/Avatar/Avatar'
import Banner from 'components/Common/Banner/Banner'

import g_css from 'App.module.css'
import l_css from './ProfileInfo.module.css'

const css = {...g_css, ...l_css}

/**
 * @param contacts.website {string}
 * @param photos.large {string}
 * @param photos.small {string}
*/

const ProfileInfo = ({ id, dob, name, location, contacts, education, photos }) => {
  return (
    <>
      <Banner id={id} haveBN={photos.large} />

      <div className={`${css.intro} ${css.block}`}>
        <Avatar id={id} havePH={photos.small} size={'large'} shadow={true} />
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

const UserInfo = ({ dob, name, location, contacts, education }) => {

  const webSite = contacts.website
    ? <a
        href={contacts.website}
        target='_blank'
        rel='noopener noreferrer'
        className={`${css.inline_a} ${css.colored_a}`}
      >
        active link
      </a>
    : 'none'

  return (
    <div className={css.info}>
      <h1 className={css.ff_header}>{name}</h1>

      <div>
        <p><b>Date of birth</b><i>:</i><u>{dob}</u></p>
        <p><b>City</b><i>:</i><u>{location.city}</u></p>
        <p><b>Education</b><i>:</i><u>{education || 'none'}</u></p>
        <p><b>Web-site</b><i>:</i><u>{webSite}</u></p>
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