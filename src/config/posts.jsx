import React from 'react'
import { RamdaPaths } from 'posts/Ramda-Paths'
import { RamdaPathsSummary } from 'posts/Ramda-Paths/Summary'

export const posts = {
  'Implementing+a+Paths+Function+to+Learn+Ramda': {
    id: 'Implementing+a+Paths+Function+to+Learn+Ramda',
    tags: ['functional programming', 'javascript', 'ramda', 'web development', 'web technologies'],
    title: 'Implementing a Paths Function to Learn Ramda',
    date: 'August 11th, 2017',
    summary: <RamdaPathsSummary />,
    content: <RamdaPaths />
  }
}
