import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import 'index.css'

import App from 'App'


import store from 'redux/redux-store'

import * as serviceWorker from 'serviceWorker'

render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
)

serviceWorker.unregister();