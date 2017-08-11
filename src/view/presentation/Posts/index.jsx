import { map } from 'ramda'
import React from 'react'
import { BlogPost } from 'view/layout/BlogPost'
import { Post } from 'view/presentation/Posts/Post'

export const Posts = ({
  posts
}) => (
  <BlogPost>
    {
      map(
        ({ id, date, title, content, summary, tags }) => (
          <Post key={id} date={date} id={id} tags={tags} title={title}>
            {posts.length > 1 ? summary : content}
          </Post>
        ),
        posts
      )
    }
  </BlogPost>
)
