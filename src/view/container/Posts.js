import { contains, isEmpty, filter, pipe, propSatisfies, values, view } from 'ramda'
import { isNotEmpty, isNotNil } from 'ratatosk-ramda'
import React from 'react'
import { connect } from 'react-redux'
import { appPosts } from 'store/app/selectors'
import { postByTitle } from 'store/posts/selectors'
import { Posts as PostsPresentation } from 'view/presentation/Posts'

const NoSuchTagOrTitle = () => (
  <p>No Blog Posts with these tags or titles found!</p>
)

const noPosts = [
  {
    content: <NoSuchTagOrTitle />,
    tags: []
  }
]

const getPost = title => view(postByTitle(title))

const getAllPosts = pipe(
  view(appPosts),
  values
)

const getAllPostsWithTag = tag => pipe(
  getAllPosts,
  filter(propSatisfies(contains(tag), 'tags'))
)

export const Posts = connect(
  (state, { tagOrTitle }) => {
    const allPosts = getAllPosts(state)
    if (isEmpty(tagOrTitle)) {
      return {
        posts: allPosts
      }
    }

    const post = getPost(tagOrTitle)(state)
    if (isNotNil(post)) {
      return {
        posts: [ post ]
      }
    }

    const allPostsWithTag = getAllPostsWithTag(tagOrTitle)(state)
    if (isNotEmpty(allPostsWithTag)) {
      return {
        posts: allPostsWithTag
      }
    }

    return {
      posts: noPosts
    }
  }
)(PostsPresentation)
