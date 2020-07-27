import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'index.css'

import App from 'App'

import store from 'redux/redux-store'

import * as serviceWorker from 'serviceWorker'

const renderEntireTree = () => {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderEntireTree()
store.subscribe(renderEntireTree)


serviceWorker.unregister();