// location.js
import { LOCATION_UPDATE } from './change-requests'

export const location = (state, { type, name, options }) => {
  switch (type) {
    case LOCATION_UPDATE: {
      return { ...state, name, options }
    }
    default: {
      return state
    }
  }
}
