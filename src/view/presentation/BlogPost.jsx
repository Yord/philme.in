import { Link } from 'ratatosk-router/view/Link'
import React from 'react'
import { ButtonGroup, Glyphicon, Label } from 'react-bootstrap'
import { OrderButton } from 'view/container/OrderButton'
import { Posts } from 'view/container/Posts'
import { TagCloud } from 'view/container/TagCloud'
import { Layout } from 'view/presentation/Layout'
import { Description } from 'view/presentation/ProfileDescription'
import { Heading } from 'view/presentation/ProfileHeading'
import { Post } from 'view/presentation/Post'
import { Portrait } from 'view/presentation/ProfilePortrait'
import { Profile } from 'view/presentation/Profile'
import { Tags } from 'view/presentation/Tags'
import { Title } from 'view/presentation/Title'

export const BlogPost = ({
  avatar,
  name,
  description,
  tagOrTitle
}) => (
  <Layout>
    <Link to='/'>
      <Profile>
        <Portrait avatar={avatar} />
        <Heading name={name} />
        <Description description={description} />
      </Profile>
    </Link>
    <Posts tagOrTitle={tagOrTitle}>
      {({ article, date, id, tags, title }) => (
        <Post key={id}>
          <Tags tags={tags} />
          <Title id={id}>{title} <Label bsStyle='success'>{date}</Label></Title>
          {article}
        </Post>
      )}
    </Posts>
    <TagCloud>
      {([tagName, tag, occurrence]) => (
        <li key={tag}>
          <Link to={`/on/${tag}`}>{tagName}</Link>
          <Label bsStyle='danger'>{occurrence}</Label>
        </li>
      )}
      <ButtonGroup>
        <OrderButton bsStyle='link' onClickOn context={{ action: 'order-tags-desc-by-occurrence' }}>
          <Glyphicon glyph='sort-by-order-alt' />
        </OrderButton>
        <OrderButton bsStyle='link' onClickOn context={{ action: 'order-tags-alphabetically' }}>
          <Glyphicon glyph='sort-by-alphabet' />
        </OrderButton>
      </ButtonGroup>
    </TagCloud>
  </Layout>
)
