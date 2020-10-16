import React, {useContext} from 'react'
import {connect} from 'react-redux'

import * as AU_SL from 'selectors/auth-selectors'
import {setLoginError, loginAPI, logoutAPI} from 'redux/auth-reducer'

const AuthContext = React.createContext(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

const CreateProvider = ({children, ...props}) => {
  const auth = {
    auth: props.auth,
    isAuth: props.auth.isAuth,
    fetching: props.auth.fetching,

    login: props.loginAPI,
    logout: props.logoutAPI,
    setLoginError: props.setLoginError
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}


const mapStateToProps = state => ({
  auth: AU_SL.getAuth(state)
})

const mapDispatchToProps = {
  setLoginError,
  loginAPI,
  logoutAPI
}

export const AuthProvider = connect(mapStateToProps, mapDispatchToProps)(CreateProvider)
