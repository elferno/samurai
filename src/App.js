import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import withSuspense from 'HOC/withSuspense'

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Error404 from 'components/Common/Error404/Error404'
import UsersSearch from './components/UsersSearch/UsersSearch'
import FriendsBarContainer from './components/FriendsBar/FriendsBarContainer'

import Hello from './components/Hello/Hello'

import GlobalLoading from 'components/Common/GlobalLoading/GlobalLoading'

import {AuthProvider} from 'Context/AuthContext'
import {initAppAPI} from 'redux/app-reducer'

import css from 'App.module.css'

const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer'))
const Dialogs = React.lazy(() =>
  import('./components/Dialogs/Dialogs'))
const UsersContainer = React.lazy(() =>
  import('./components/Users/UsersContainer'))

const App = (props) => {

  const {initialized, initAppAPI} = props

  useEffect(() => {
    setTimeout(() => initAppAPI(), 0)
  }, [initAppAPI])

  return (
    <>
      <GlobalLoading initialized={initialized}/>
      <Content initialized={initialized}/>
    </>
  )
}

const Content = ({initialized}) => {
  if (!initialized)
    return null

  return (
    <AuthProvider>
      <div className={css.wrapper}>
        <Header/>
        <NavBar/>
        <UsersSearch/>
        <FriendsBarContainer/>
        <div className={css.content}>
          <Switch>
            <Route path='/profile/:id?' render={withSuspense(ProfileContainer)}/>
            <Route path='/dialogs' render={withSuspense(Dialogs)}/>
            <Route path='/users' render={withSuspense(UsersContainer)}/>
            <Route path='/news'/>
            <Route path='/music'/>
            <Route path='/settings'/>

            <Route path='/' exact render={() => <Hello/>}/>
            <Route path='*' render={() => <Error404 withBox={true}/>}/>
          </Switch>
        </div>
      </div>
    </AuthProvider>
  )
}

const mapStateToProps = (state) => ({initialized: state.app.initialized})
const mapDispatchToProps = {initAppAPI}
export default connect(mapStateToProps, mapDispatchToProps)(App)