import { ap, path } from 'ramda'

const paths = (paths, obj) => ap(
  ap([path], paths),
  [obj]
)

paths(selections, obj) // [1, 2]
