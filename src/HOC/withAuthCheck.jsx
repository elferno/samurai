import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const withAuthCheck = (Component) => {
  class AuthCheck extends React.Component {
    render() {
      if (this.props.isAuth === false)
        return <Redirect to='/'/>

      return <Component {...this.props}/>
    }
  }

  return connect((state) => ({isAuth: state.auth.isAuth})) (AuthCheck)
}

export default withAuthCheck