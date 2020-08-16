import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import LoginBlock from './LoginBlock'

import {
  setFetchingAuth,
  setAuth
}
  from 'redux/auth-reducer'

class LoginBlockAPI extends React.Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  login(login, pass, stay) {
    this.props.setFetchingAuth(true)

    axios.get(
      `https://fishup.fun/api/auth.php?login=${login}&pass=${pass}&stay=${stay}`,
      { withCredentials: 'include' }
    )
      .then(response => {
        this.props.setFetchingAuth(false)
        this.props.setAuth(response.data)
      })
  }

  render() {
    return <LoginBlock login={this.login}/>
  }
}

const NavBarContainer = connect((state) => ({
  auth: state.auth
}), {
  setFetchingAuth,
  setAuth
})
  (LoginBlockAPI)

export default NavBarContainer