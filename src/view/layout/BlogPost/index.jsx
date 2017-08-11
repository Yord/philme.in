import { Link as RouterLink } from 'ratatosk-router/view/Link'
import React from 'react'
import styled from 'styled-components'
import { Post } from 'view/layout/BlogPost/Post'
import { Profile } from 'view/container/Profile'
import { TagCloud } from 'view/container/TagCloud'

export let BlogPost = ({
  children,
  className,
  Footer = TagCloud,
  Header = Profile,
  Link = RouterLink
}) => (
  <main className={className}>
    <Link to='/'>
      <Header />
    </Link>
    <Post>{children}</Post>
    <Footer />
  </main>
)

BlogPost = styled(BlogPost)`
  a {
    color: rgba(0, 0, 0, 0.8);
  }
  a:focus {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:hover > header {
    padding-top: 5rem;
    padding-bottom: 1rem;
  }
  a:hover img {
    transform: rotate(-15deg);
  }
`
