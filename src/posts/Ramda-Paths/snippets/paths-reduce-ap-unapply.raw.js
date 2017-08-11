import { ap, path, reduce, unapply } from 'ramda'

const paths = unapply(reduce(ap, [path]))

paths(selectors, [obj]) // [1, 2]
