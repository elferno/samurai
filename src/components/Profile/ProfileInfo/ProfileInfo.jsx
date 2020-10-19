import React from 'react'

import Avatar from 'components/Common/Avatar/Avatar'
import Banner from 'components/Common/Banner/Banner'
import UserInfo from './UserInfo/UserInfo'

import g_css from 'App.module.css'
import l_css from './ProfileInfo.module.css'

const css = {...g_css, ...l_css}

/**
 * @param photos.banner {string}
 * @param photos.avatar {string}
*/

const ProfileInfo = ({ id, photos, ...props }) => {

  const { ownProfile, submitFile } = props

  return (
    <>
      <Banner id={id} banner={photos.banner} />

      <div className={`${css.intro} ${css.block}`}>
        <Avatar
          id={id}
          shadow={true}
          size={'large'}
          editable={ownProfile}
          avatar={photos.avatar}
          submitFile={submitFile}
        />
        <UserInfo {...props}/>
        <Statistics/>
      </div>
    </>
  )
}

const Statistics = () => {
  return (
    <div className={css.stats}>
      <div id='settings-portal'/>
      <div className={`${css.cc_inline} ${css.stats_container}`}>
        статистика
      </div>
    </div>
  )
}

export default ProfileInfo