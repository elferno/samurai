import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from 'redux/redux-store'
import App from 'App'

import 'index.css'

import * as serviceWorker from 'serviceWorker'

render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
)

serviceWorker.unregister();