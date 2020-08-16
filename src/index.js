import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from 'redux/redux-store'

import 'index.css'


import App from 'App'

import * as serviceWorker from 'serviceWorker'

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
)

serviceWorker.unregister();