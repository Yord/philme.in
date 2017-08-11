import { curry, has, isNil, prop } from 'ramda'

export const reducer = curry((mapping, action, state) =>
  isNil(state)
  ? {}
  : has(action.type, mapping)
  ? prop(action.type, mapping)(action)(state)
  : state
)
