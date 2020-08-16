import React from 'react'
import axios from 'axios'
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

import css from 'App.module.css'

import {
  setAuth,
  setFetchingAuth
} from 'redux/auth-reducer'


class AppAPI extends React.Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    if (this.props.auth.userID === null)
      axios.get(
        'https://fishup.fun/api/auth.php',
        {withCredentials: 'include'}
      )
        .then(response => {
          this.props.setAuth(response.data)
        })
  }

  login(login, pass, stay) {
    this.props.setFetchingAuth(true)

    axios.get(
      `https://fishup.fun/api/auth.php?login=${login}&pass=${pass}&stay=${stay}`,
      {withCredentials: 'include'}
    )
      .then(response => {
        this.props.setFetchingAuth(false)
        this.props.setAuth(response.data)
      })
  }

  logout() {
    this.props.setFetchingAuth(true)

    axios.get(
      'https://fishup.fun/api/auth.php?kill',
      {withCredentials: 'include'}
    )
      .then(() => {
        this.props.setFetchingAuth(false)
        this.props.setAuth(false)
      })
  }

  renderAfterAuth(component) {
    if (this.props.auth.userID !== null) {
      return component
    }
    return null
  }

  render() {
    return (
      <div className={css.wrapper}>
        <Header auth={this.props.auth} logout={this.logout}/>
        <NavBar auth={this.props.auth} login={this.login}/>
        <UsersSearch/>

        { this.renderAfterAuth(<FriendsBarContainer/>) }

        <div className={css.content}>
          <Route path='/' exact
                 render={<Hello/>}
          />
          <Route path='/profile/:id?'
                 render={() => this.renderAfterAuth(
                   <ProfileContainer auth={this.props.auth}/>
                 )}
          />
          <Route path='/dialogs'
                 render={<Dialogs/>}
          />
          <Route path='/users'
                 render={<UsersContainer/>}
          />
          <Route path='/news'/>
          <Route path='/music'/>
          <Route path='/settings'/>
        </div>
      </div>
    )
  }
}

const App = connect((state) => ({
  auth: state.auth
}), {
  setAuth,
  setFetchingAuth
})
(AppAPI)

export default App