import { map, replace } from 'ramda'
import { isNotEmpty } from 'ratatosk-ramda'
import { history } from 'ratatosk-router/config/history'
import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import styled from 'styled-components'

export let Tag = ({ className, tag }) => (
  <Button className={className} bsStyle='warning' bsSize='xsmall' onClick={
    event => {
      event.preventDefault()
      history.push(`/on/${tag}`)
    }
  }>
    {replace('+', ' ', tag)}
  </Button>
)

Tag = styled(Tag)`
  margin-right: 5px;
  margin-left: 0 !important;
`

export let Tags = ({ className, tags }) => (
  isNotEmpty(tags)
  ? (
    <ButtonToolbar className={className}>
      {
        map(tag => (
          <Tag tag={tag} key={tag} />
        ), tags)
      }
    </ButtonToolbar>
  )
  : null
)

Tags = styled(Tags)`
  margin: 3rem auto 0 auto;
  width: 700px;
`

export default Tags
