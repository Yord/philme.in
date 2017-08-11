import React from 'react'
import { Label } from 'react-bootstrap'
import styled from 'styled-components'
import { Title } from 'view/presentation/Posts/Title'
import { Tags } from 'view/presentation/Tags'

export let Post = ({
  children,
  className,
  date,
  id,
  tags,
  title
}) => (
  <div className={className}>
    <Tags tags={tags} />
    <Title id={id}>{title} <Label bsStyle='success'>{date}</Label></Title>
    {children}
  </div>
)

Post = styled(Post)`
  a span {
    display: inline-block;
    font-size: 1.2rem;
    vertical-align: middle;
  }
`
