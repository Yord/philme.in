import { ap, o, path } from 'ramda'

const paths = o(ap, ap([path]))

paths(selections)([obj]) // [1, 2]
