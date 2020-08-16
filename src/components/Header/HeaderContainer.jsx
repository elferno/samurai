import React from 'react'
import {connect} from 'react-redux'

import axios from 'axios'

import Header from './Header'

import {
  setAuth,
  setFetchingAuth
}
  from 'redux/auth-reducer'

class HeaderAPI extends React.Component {
  constructor(props) {
    super(props)
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

  logout() {
    this.props.setFetchingAuth(true)

    axios.get(
      'https://fishup.fun/api/auth.php?kill',
      { withCredentials: 'include' }
    )
      .then(() => {
        this.props.setFetchingAuth(false)
        this.props.setAuth(false)
      })
  }

  render() {
    return <Header auth={this.props.auth} logout={this.logout} />
  }
}

const HeaderContainer = connect((state) => ({
  auth: state.auth
}), {
  setAuth,
  setFetchingAuth
})
  (HeaderAPI)

export default HeaderContainer