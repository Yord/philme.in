import { ap, identity, of, path, reduce, unapply, useWith } from 'ramda'

const paths = useWith(
  unapply(reduce(ap, [path])),
  [identity, of]
)

paths(selectors, obj) // [1, 2]
paths(selectors)(obj) // [1, 2]
