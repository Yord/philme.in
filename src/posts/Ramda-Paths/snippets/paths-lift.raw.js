import { lift, path } from 'ramda'

const paths = (paths, obj) => lift(path)(
  paths,
  [obj]
)

paths(selectors, obj) // [1, 2]
