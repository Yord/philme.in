import { compose } from 'ramda'
import { lensPropOr } from 'ratatosk-ramda'
import { appProfile } from 'store/app/selectors'

export const profileAvatar = compose(
  appProfile,
  lensPropOr(
    'https://avatars0.githubusercontent.com/u/721705?v=3&s=460',
    'avatar'
  )
)

export const profileDescription = compose(
  appProfile,
  lensPropOr(
    'I am a web enthusiast and lead engineer for machine learning ' +
    'and web technologies at in-tech, located in Brunswick, Germany',
    'description'
  )
)

export const profileName = compose(
  appProfile,
  lensPropOr(
    'Philipp Wille',
    'name'
  )
)
