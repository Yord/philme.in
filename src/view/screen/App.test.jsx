import React from 'react'
import { Provider } from 'react-redux'
import { create } from 'react-test-renderer'
import { createStore } from 'redux'
import { App } from 'view/screen/App'
const { expect, test } = global

test('App should have default parameters', () => {
  const component = create(
    <Provider store={createStore(() => ({}))}>
      <App />
    </Provider>
  )

  expect(component.toJSON()).toMatchSnapshot()
})
