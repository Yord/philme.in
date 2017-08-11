import { posts } from 'config/posts'
import { applyMiddleware, compose as reduxCompose, createStore } from 'redux'
import { app } from 'store/app'

const startState = {
  posts
}

export const configureStore = saga => {
  const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose
  return createStore(
    (state, action) => app(action, state),
    startState,
    compose(applyMiddleware(saga))
  )
}
