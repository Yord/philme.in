import { identity, lift, of, path, useWith } from 'ramda'

const paths = useWith(
  lift(path),
  [identity, of]
)

paths(selectors, obj) // [1, 2]
paths(selectors)(obj) // [1, 2]
