import React, {Fragment} from 'react'
import axios from 'axios'

import User from './User/User'
import Loading from 'components/Common/Loading/Loading'

import g_css from 'App.module.css'
import l_css from './Users.module.css'


class Users extends React.Component {

  componentDidMount() {
    axios
      .get('https://powernet.su/api/users.php')
      .then(response => this.props.onReadUsers(response.data.items || [null]))
  }

  componentWillUnmount() {
    this.props.onDropUsers()
  }

  render() {

    const css = {...g_css, ...l_css}
    const users = this.props.users

    const userList = () => {
      return (
        <Fragment>
          { users
            .map(user => <User
              key={user.id}
              onToggleFollow={this.props.onToggleFollow}
              {...user}
            />)
          }
          <div
            className={`${css.button} ${css.upload_button}`}
            onClick={this.props.onUpload}
          >
            UPLOAD MORE
          </div>
        </Fragment>
      )
    }

    return (
      !users.length
        ? <div className={css.block}><Loading /></div>
        : users[0] === null
          ? <div className={css.block}>no users found</div>
          : userList(users)
    )
  }

}

export default Users