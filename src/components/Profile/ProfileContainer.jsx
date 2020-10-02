import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

import Profile from './Profile'
import Error404 from 'components/Common/Error404/Error404'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import { getProfile } from 'selectors/profile-selectors'

import {
  addPost,
  resetPage,
  setProfileAPI,
  saveProfileAPI,
  cancelProfileAPI
} from
    'redux/profile-reducer'

const ProfileContainer = (props) => {
  // var
  const requested_ID = props.match.params.id || 'own'
  const current_ID = props.profile.currentID
  const ownProfile = current_ID === 'own'


  // actions
  const setProfile = () => props.setProfileAPI(requested_ID)
  const unsetProfile = () => { props.cancelProfileAPI(); props.resetPage() }


  // effectors
  useEffect(() => {
    if (current_ID === null)              // init page
      setProfile()
    else if (current_ID !== requested_ID) // URL changed
      unsetProfile()
  }, [current_ID, requested_ID])     // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => unsetProfile(), []) // eslint-disable-line react-hooks/exhaustive-deps



  // render
  const { auth, profile, addPost } = props

  if (!auth.isAuth && ownProfile)  // .../profile -> logged out
    return <Redirect to='/'/>

  return (
    <PreloadContent
      isLoading={profile.info === null || props.auth.fetching}
      noContent={profile.info === false}
      noContentFiller={<Error404/>}
    >
      <Profile
        profile={profile}
        addPost={addPost}
        isAuth={auth.isAuth}
        ownProfile={ownProfile}
        saveProfile={(formData, callback) => props.saveProfileAPI(formData, callback)}
      />
    </PreloadContent>
  )
}

const mapStateToProps = (state) => ({
  profile: getProfile(state)
})

const mapDispatchToProps = {
  addPost,
  resetPage,
  setProfileAPI,
  saveProfileAPI,
  cancelProfileAPI
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)
  (ProfileContainer)