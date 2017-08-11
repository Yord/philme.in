import { juxt, map, o, path } from 'ramda'

const paths = o(juxt, map(path))

paths(selectors)(obj) // [1, 2]
