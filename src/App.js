import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import FriendsBarContainer from './components/FriendsBar/FriendsBarContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import UsersContainer from './components/Users/UsersContainer'
import Hello from './components/Hello/Hello'
import Dialogs from './components/Dialogs/Dialogs'
import UsersSearch from './components/UsersSearch/UsersSearch'

import GlobalLoading from 'components/Common/GlobalLoading/GlobalLoading'

import css from 'App.module.css'

import {
  setLoginError,

  authAPI,
  loginAPI,
  logoutAPI
} from
    'redux/auth-reducer'

class AppAPI extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      if (this.props.auth.isAuth === null)
        this.props.authAPI()
    }, 1000)
  }

  render() {
    const canShowContent = this.props.auth.isAuth !== null

    return (
      <>
        <GlobalLoading hide={canShowContent}/>

        {canShowContent &&
        <Content
          auth={this.props.auth}
          login={this.props.loginAPI}
          logout={this.props.logoutAPI}
          setLoginError={this.props.setLoginError}
        />}
      </>
    )
  }
}

const Content = ({auth, login, logout, setLoginError}) => {
  return (
    <div className={css.wrapper}>
      <Header auth={auth} logout={logout}/>
      <NavBar auth={auth} login={login} setLoginError={setLoginError}/>
      <UsersSearch/>
      <FriendsBarContainer auth={auth}/>
      <div className={css.content}>
        <Route path='/' exact render={() => <Hello/>}/>
        <Route path='/profile/:id?' render={() => <ProfileContainer auth={auth}/>}/>
        <Route path='/dialogs' render={() => <Dialogs/>}/>
        <Route path='/users' render={() => <UsersContainer auth={auth}/>}/>
        <Route path='/news'/>
        <Route path='/music'/>
        <Route path='/settings'/>
      </div>
    </div>
  )
}

const App = connect((state) => ({
  auth: state.auth
}), {
  setLoginError,

  authAPI,
  loginAPI,
  logoutAPI
})
(AppAPI)

export default App