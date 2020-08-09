import React from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import FriendsBarContainer from './components/FriendsBar/FriendsBarContainer'
import Dialogs from './components/Dialogs/Dialogs'
import ProfileContainer from './components/Profile/ProfileContainer'
import UsersContainer from './components/Users/UsersContainer'

import css from 'App.module.css'

const App = () => {

  const content = {
    'profile': {
      path: '/profile',
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
      <Header/>
      <NavBar/>

      <FriendsBarContainer/>

      <div className={css.content}>
        <Route {...content.profile} />
        <Route {...content.dialogs} />
        <Route {...content.users}   />
        <Route {...content.news}    />
        <Route {...content.music}   />
        <Route {...content.settings}/>
      </div>
    </div>

  )
}

export default App