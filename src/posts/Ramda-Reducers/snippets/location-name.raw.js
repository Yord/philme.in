import { set } from 'ramda'
import { reducer } from 'reducer'
import { locationName } from 'selectors'
import { UpdateLocationType } from 'change-requests'

export const update = ({ name }) => set(locationName, name)

export const location = reducer({
  [UpdateLocationType]: update
})
