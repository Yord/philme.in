import { location } from 'store/location'
import { UpdateLocationType } from 'store/location/change-requests'
import { reducer } from 'utils/redux'

export const app = reducer({
  [UpdateLocationType]: location
})
