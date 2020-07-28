import React from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import FriendsBarContainer from './components/FriendsBar/FriendsBarContainer'
import Dialogs from './components/Dialogs/Dialogs'
import Profile from './components/Profile/Profile'

import css from 'App.module.css'

const App = () => {

  const content = {
    'profile': {
      path: '/profile',
      render: () => <Profile/>
    },

    'dialogs': {
      path: '/dialogs',
      render: () => <Dialogs/>
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
        <Route {...content.news}    />
        <Route {...content.music}   />
        <Route {...content.settings}/>
      </div>
    </div>

  )
}

export default App