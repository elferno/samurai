import React from 'react'

import Login from './Login/Login'

import g_css from 'App.module.css'
import l_css from './LoginBlock.module.css'
const css = {...g_css, ...l_css}

class LoginBlock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      login: 'elijah',
      pass: 'asdasdasd',
      stay: false
    }

    this.login = this.login.bind(this)
    this.handleInputText = this.handleInputText.bind(this)
    this.handleInputCheckbox = this.handleInputCheckbox.bind(this)
  }

  handleInputText(field, e) {
    this.setState({[field]: e.currentTarget.value})
  }

  handleInputCheckbox(e) {
    this.setState((state) => ({stay: !state.stay}))
  }

  login() {
    const {login, pass, stay} = this.state

    if (login && pass) {
      this.props.login(login, pass, stay ? 1 : 0)
    } else {
      this.props.setLoginError(2)
    }
  }

  render() {
    if (this.props.auth.error)
      return showError(
        this.props.auth.error,
        () => this.props.setLoginError(null)
      )

    return <Login
      login={this.state.login}
      pass={this.state.pass}
      makeLogin={this.login}

      text={this.handleInputText}
      checkbox={this.handleInputCheckbox}
    />
  }
}

const showError = (code, click) => {
  let error = ''

  switch (code) {
    case 1: error = 'wrong login or password'; break
    case 2: error = 'please, specify login and password'; break
    default: break
  }

  return (
    <div className={`${css.cc} ${css.cc_column}`}>
      <div>{error}</div>
      <div className={`${css.button} ${css.accept_error}`} onClick={click}>OK</div>
    </div>
  )
}

export default LoginBlock