import { pipe, set } from 'ramda'
import { reducer } from './reducer'
import { locationName, locationOptions } from './selectors'
import { LOCATION_UPDATE } from './change-requests'

export const location = reducer({
  [LOCATION_UPDATE]: ({ name, options }) => pipe(
    set(locationName, name),
    set(locationOptions, options)
  )
})
