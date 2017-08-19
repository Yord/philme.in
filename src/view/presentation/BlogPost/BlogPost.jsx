import { PropTypes } from 'prop-types'
import { Link } from 'ratatosk-router/view/Link'
import React from 'react'
import { ButtonGroup, Glyphicon, Label } from 'react-bootstrap'
import LinkButton from 'view/container/LinkButton'
import Posts from 'view/container/Posts'
import TagCloud from 'view/container/TagCloud'
import Layout from 'view/presentation/Layout'
import Description from 'view/presentation/ProfileDescription'
import Heading from 'view/presentation/ProfileHeading'
import Post from 'view/presentation/Post'
import Portrait from 'view/presentation/ProfilePortrait'
import Profile from 'view/presentation/Profile'
import Tag from 'view/presentation/Tag'
import Tags from 'view/presentation/Tags'
import Title from 'view/presentation/Title'

/**
 * BlogPost wrapper.
 *
 * @version 1.0.0
 * @author [Philipp Wille](https://github.com/Yord)
*/
export const BlogPost = ({
  avatar,
  description,
  name,
  tagOrTitle
}) => (
  <Layout>
    <Link to='/'>
      <Profile>
        <Portrait avatar={avatar} />
        <Heading>{name}</Heading>
        <Description>{description}</Description>
      </Profile>
    </Link>
    <Posts tagOrTitle={tagOrTitle}>
      {({ article, date, id, tags, title }) => (
        <Post key={id}>
          <Tags tags={tags}>
            {tag => (
              <Tag key={tag}>{tag}</Tag>
            )}
          </Tags>
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
        <LinkButton onClickOn context={{ action: 'order-tags-desc-by-occurrence' }}>
          <Glyphicon glyph='sort-by-order-alt' />
        </LinkButton>
        <LinkButton onClickOn context={{ action: 'order-tags-alphabetically' }}>
          <Glyphicon glyph='sort-by-alphabet' />
        </LinkButton>
      </ButtonGroup>
    </TagCloud>
  </Layout>
)

BlogPost.propTypes = {
  /** Path to a profile image. */
  avatar: PropTypes.string,
  /** Textual profile description. */
  description: PropTypes.string,
  /** Blog owner name. */
  name: PropTypes.string,
  /** Tag or title passed on by the router. */
  tagOrTitle: PropTypes.string
}

BlogPost.defaultProps = {
  avatar: '',
  description: '',
  name: '',
  tagOrTitle: null
}

export default BlogPost
