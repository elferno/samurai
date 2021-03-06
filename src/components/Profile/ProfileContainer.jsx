import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

import { useAuth } from 'Context/AuthContext'

import Profile from './Profile'
import Error404 from 'components/Common/Error404/Error404'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import * as PL_SL from 'selectors/profile-selectors'

import {
  addPost,
  resetPage,
  setProfileAPI,
  saveProfileAPI,
  cancelProfileAPI
} from
    'redux/profile-reducer'

import {submitFileAPI, cancelFileAPI} from 'redux/file-reducer'

const ProfileContainer = (props) => {
  // var
  const requested_ID = props.match.params.id || 'own'
  const current_ID = props.profile.currentID
  const ownProfile = current_ID === 'own'

  const { isAuth, fetching } = useAuth()
  const { profile, addPost } = props


  // actions
  const setProfile = id => props.setProfileAPI(id)
  const unsetProfile = () => {
    props.cancelProfileAPI()
    props.cancelFileAPI()
    props.resetPage()
  }


  // effectors
  useEffect(() => {
    if (current_ID === null) setProfile(requested_ID)    // init page
    else if (current_ID !== requested_ID) unsetProfile() // URL changed
  }, [current_ID, requested_ID]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => unsetProfile(), []) // eslint-disable-line react-hooks/exhaustive-deps



  // render
  if (!isAuth && ownProfile)  // .../profile -> logged out
    return <Redirect to='/'/>

  return (
    <PreloadContent
      isLoading={profile.info === null || fetching}
      noContent={profile.info === false}
      noContentFiller={<Error404/>}
    >
      <Profile
        profile={profile}
        addPost={addPost}
        isAuth={isAuth}
        ownProfile={ownProfile}
        saveProfile={(formData, callback) => props.saveProfileAPI(formData, callback)}
        submitFile={(file, callback, type) => props.submitFileAPI(file, callback, type)}
      />
    </PreloadContent>
  )
}

const mapStateToProps = (state) => ({
  profile: PL_SL.getProfile(state)
})

const mapDispatchToProps = {
  addPost,
  resetPage,
  setProfileAPI,
  saveProfileAPI,
  cancelProfileAPI,

  submitFileAPI,
  cancelFileAPI
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)
  (ProfileContainer)