import { path } from 'ramda'

const obj = {
  a: { c: 1 },
  b: { d: 2 }
}

path(['a', 'c'], obj) // 1
path(['b', 'd'], obj) // 2
