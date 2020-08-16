import React from 'react'

import g_css from 'App.module.css'
import l_css from './LoginBlock.module.css'

const css = {...g_css, ...l_css}

class LoginBlock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      login: 'elijah',
      pass: 'asdasdasd',
      stay: '1'
    }
    this.login = this.login.bind(this)
  }

  login() {
    this.props.login(
      this.state.login,
      this.state.pass,
      this.state.stay
    )
  }

  render() {
    return (
      <div className={css.container} onClick={this.login}>
        LoginBlock
      </div>
    )
  }
}

export default LoginBlock