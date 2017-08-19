import { view } from 'ramda'
import { connect } from 'react-redux'
import { profileAvatar, profileDescription, profileName } from 'store/profile/selectors'
import BlogPostPresentation from 'view/presentation/BlogPost'

export const BlogPost = connect(
  state => ({
    avatar: view(profileAvatar, state),
    description: view(profileDescription, state),
    name: view(profileName, state)
  })
)(BlogPostPresentation)

export default BlogPost
