import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import store from 'redux/redux-store'
import App from 'App'

import 'index.css'

import * as serviceWorker from 'serviceWorker'

render(
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>,

  document.getElementById('root')
)

serviceWorker.unregister();