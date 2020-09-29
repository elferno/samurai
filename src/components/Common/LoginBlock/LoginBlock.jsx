import React from 'react'
import Login from './Login/Login'

class LoginBlock extends React.Component {

  login = (formData) => {
    const {login, pass, stay = 1} = formData
    this.props.login(login, pass, stay ? 1 : 0)
  }

  render() {
    return <Login onSubmit={this.login} setLoginError={this.props.setLoginError}/>
  }
}

export default LoginBlock