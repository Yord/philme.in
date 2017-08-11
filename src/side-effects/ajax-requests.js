import { get, post } from 'axios'

const restBackend = uri => `http://localhost:2357${uri}`

export const getCounters = () => get(restBackend(`/counters`))

export const postCounters = (id, value) => (
  post(restBackend(`/counters/${id}`), { value })
)
