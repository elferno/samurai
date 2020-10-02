import React, { useState } from 'react'

import WebLink from 'components/Common/WebLink/WebLink'
import ProfileSettings from './ProfileSettings/ProfileSettings'

import g_css from 'App.module.css'
import l_css from './UserInfo.module.css'

const css = {...g_css, ...l_css}

const UserInfo = (props) => {

  const [editMode, setEditMode] = useState(false)
  const toggleSS = () => { setEditMode(!editMode) }

  const { userInfo, ownProfile, saveProfile, isSavingProfile } = props
  const { dob, name, status, website, country, city, education } = userInfo

  return (
    <div className={css.info}>
      {ownProfile &&
      <div onClick={toggleSS} className={`${css.edit_info} ${css.cc}`}>✎</div>
      }
      {ownProfile &&
      <ProfileSettings
        initialValues={userInfo}
        onSubmit={saveProfile}
        ownProfile={ownProfile}
        toggleSS={toggleSS}
        saveProfile={saveProfile}
        editMode={editMode}
        isSavingProfile={isSavingProfile}
      />
      }
      <h1 className={css.ff_header}>{name}</h1>
      <div className={css.status}>{status || <i>your status could be here</i>}</div>
      <div className={css.info_content}>
        <p><b>Date of birth</b><i>:</i><u>{dob}</u></p>
        <p><b>Country</b><i>:</i><u>{country}</u></p>
        <p><b>City</b><i>:</i><u>{city}</u></p>
        <p><b>Education</b><i>:</i><u>{education || 'none'}</u></p>
        <p><b>Web-site</b><i>:</i><u><WebLink website={website} noContent={'none'}/></u></p>
      </div>
    </div>
  )
}

export default UserInfo