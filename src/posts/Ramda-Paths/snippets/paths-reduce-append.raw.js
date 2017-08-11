import { append, path, reduce } from 'ramda'

const paths = (paths, obj) => reduce(
  (acc, a) => append(path(a, obj), acc),
  [],
  paths
)
