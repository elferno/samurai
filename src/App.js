import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

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
  setAuth,
  setLoginError,
  setFetchingAuth
} from
    'redux/auth-reducer'

import {
  setFriendsBar
} from
    'redux/friends-reducer'

import {
  API_auth,
  API_login,
  API_logout
} from
    'api/api'


class AppAPI extends React.Component {

  constructor(props) {
    super(props)

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.autoLogin = this.autoLogin.bind(this)
    this.setLoginError = this.setLoginError.bind(this)
  }

  componentDidMount() {
    setTimeout(this.autoLogin, 1000)
  }

  autoLogin() {
    if (this.props.auth.isAuth === null)
      API_auth()
        .then(data => this.authorise(data))
  }

  login(login, pass, stay) {
    this.props.setFetchingAuth(true)

    API_login(login, pass, stay)
      .then(data => {
        this.props.setFetchingAuth(false)

        if (data.error) this.setLoginError(data.error)
        else this.authorise(data)
      })
  }

  authorise(response) {
    this.props.setAuth(response.userInfo)
    this.props.setFriendsBar(response.friendsBar, response.totalFriends)
  }

  logout() {
    this.props.setFetchingAuth(true)

    API_logout()
      .then(() => {
        this.props.setFetchingAuth(false)

        this.props.setAuth(false)
        this.props.setFriendsBar()
      })
  }

  setLoginError(error) {
    this.props.setLoginError(error)
  }

  render() {
    const canShowContent = this.props.auth.isAuth !== null

    return (
      <>
        <GlobalLoading hide={canShowContent}/>

        {canShowContent &&
        <Content
          auth={this.props.auth}
          login={this.login}
          logout={this.logout}
        />}
      </>
    )
  }
}

const Content = ({ auth, login, logout, setLoginError }) => {
  return (
    <div className={css.wrapper}>
      <Header
        auth={auth}
        logout={logout}
      />

      <NavBar
        auth={auth}
        login={login}
        setLoginError={setLoginError}
      />

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
  setAuth,
  setLoginError,
  setFetchingAuth,

  setFriendsBar
})
 (AppAPI)

export default App