import { flip, map, o, path } from 'ramda'

const paths = o(map, flip(path))

paths(obj)(selections) // [1, 2]
