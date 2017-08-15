import { assoc, chain, contains, ifElse, isEmpty, equals, filter, length, map, pipe, prop, propSatisfies, values, view } from 'ramda'
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
    article: <NoSuchTagOrTitle />,
    id: 'No+Such+Tag+or+Title',
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

const articleAsKey = key => chain(assoc('article'), prop(key))
const articleAsContent = articleAsKey('content')
const articleAsSummary = articleAsKey('summary')

export const Posts = connect(
  (state, { tagOrTitle }) => {
    const allPosts = getAllPosts(state)
    if (isEmpty(tagOrTitle)) {
      return {
        posts: map(articleAsSummary, allPosts)
      }
    }

    const post = getPost(tagOrTitle)(state)
    if (isNotNil(post)) {
      return {
        posts: [ articleAsContent(post) ]
      }
    }

    const allPostsWithTag = getAllPostsWithTag(tagOrTitle)(state)
    if (isNotEmpty(allPostsWithTag)) {
      return {
        posts: (
          ifElse(
            pipe(length, equals(1)),
            map(articleAsContent),
            map(articleAsSummary)
          )(allPostsWithTag)
        )
      }
    }

    return {
      posts: noPosts
    }
  }
)(PostsPresentation)
