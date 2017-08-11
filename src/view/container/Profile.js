import { view } from 'ramda'
import { connect } from 'react-redux'
import { profileAvatar, profileDescription, profileName } from 'store/profile/selectors'
import { Profile as ProfilePresentation } from 'view/presentation/Profile'

export const Profile = connect(
  state => ({
    avatar: view(profileAvatar, state),
    description: view(profileDescription, state),
    name: view(profileName, state)
  })
)(ProfilePresentation)
