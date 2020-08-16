import React from 'react'
import { Route } from 'react-router-dom'

import HeaderContainer from './components/Header/HeaderContainer'
import NavBarContainer from './components/NavBar/NavBarContainer'
import FriendsBarContainer from './components/FriendsBar/FriendsBarContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import UsersContainer from './components/Users/UsersContainer'
import Hello from './components/Hello/Hello'
import Dialogs from './components/Dialogs/Dialogs'
import UsersSearch from './components/UsersSearch/UsersSearch'

import css from 'App.module.css'

const App = () => {

  const content = {
    'hello': {
      path: '/',
      exact: true,
      render: () => <Hello/>
    },

    'profile': {
      path: '/profile/:id?',
      render: () => <ProfileContainer/>
    },

    'dialogs': {
      path: '/dialogs',
      render: () => <Dialogs/>
    },

    'users': {
      path: '/users',
      render: () => <UsersContainer/>
    },

    'news': {
      path: '/'
    },

    'music': {
      path: '/'
    },

    'settings': {
      path: '/'
    }
  }

  return (

    <div className={css.wrapper}>
      <HeaderContainer/>
      <NavBarContainer/>
      <UsersSearch/>

      <FriendsBarContainer/>

      <div className={css.content}>
        <Route {...content.hello} />
        <Route {...content.profile} />
        <Route {...content.dialogs} />
        <Route {...content.users} />
        <Route {...content.news} />
        <Route {...content.music} />
        <Route {...content.settings}/>
      </div>
    </div>

  )
}

export default App