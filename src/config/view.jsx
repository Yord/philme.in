import { screens } from 'config/routes'
import { Router } from 'ratatosk-router/view/Router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

export const configureView = (saga, store) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router screens={screens} />
    </Provider>,
    document.getElementById('app')
  )
}
