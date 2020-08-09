import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import Users from './Users'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import {
  setUsers,
  resetPage,
  updateUsers,
  toggleFollow,
  setPageToNext,
  toggleIsLoading
} from
    'redux/users-reducer'

class UsersAPI extends React.Component {

  get requestURL() {
    return `https://powernet.su/api/users.php?
          page=${this.props.page}
          &limit=${this.props.limit}`
  }

  setUsers() {
    axios
      .get(this.requestURL)
      .then(response => {
        this.props.setUsers(response.data.users, response.data.totalUsers)
      })
  }

  updateUsers() {
    this.props.toggleIsLoading()

    axios
      .get(this.requestURL)
      .then(response => {
        this.props.updateUsers(response.data.users)
        this.props.toggleIsLoading()
      })
  }

  componentDidMount() {
    this.setUsers()
  }

  componentWillUnmount() {
    this.props.resetPage()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.page !== this.props.page)
      this.updateUsers()
  }

  render() {

    const {
      page,
      users,
      limit,
      isLoading,
      totalUsers,
      setPageToNext,
      toggleFollow
    } = this.props

    return (
      <PreloadContent
        isLoading={users === null}
        noContent={users === false}
        noContentFiller={'no users found'}
      >
        <Users
          page={page}
          users={users}
          limit={limit}
          totalUsers={totalUsers}
          isLoading={isLoading}
          setPageToNext={setPageToNext}
          toggleFollow={toggleFollow}
        />
      </PreloadContent>
    )


  }
}

const UsersContainer = connect((state) => ({
  totalUsers: state.users.totalUsers,
  isLoading: state.users.isLoading,
  users: state.users.users,
  limit: state.users.limit,
  page: state.users.page
}), {
  setUsers,
  resetPage,
  updateUsers,
  toggleFollow,
  setPageToNext,
  toggleIsLoading
})
(UsersAPI)

export default UsersContainer