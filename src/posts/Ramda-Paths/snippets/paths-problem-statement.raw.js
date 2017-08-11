const obj = {
  a: { c: 1 },
  b: { d: 2 }
}

const selections = [['a', 'c'], ['b', 'd']]

const paths = ???

paths(selections, obj) // [1, 2]
paths(selections)(obj) // [1, 2]
