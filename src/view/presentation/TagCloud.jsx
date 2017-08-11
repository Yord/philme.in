import { Link as RouterLink } from 'ratatosk-router/view/Link'
import { ButtonGroup, ButtonToolbar, Glyphicon, Label } from 'react-bootstrap'
import { map } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import { OrderButton } from 'view/container/OrderButton'
import FlipMove from 'react-flip-move'

export let TagCloud = ({
  className,
  tagsWithOccurrence,
  Button = OrderButton,
  Link = RouterLink
}) => (
  <footer className={className}>
    <div>
      <ButtonToolbar>
        <ButtonGroup>
          <Button bsStyle='link' onClickOn context={{ action: 'order-tags-desc-by-occurrence' }}>
            <Glyphicon glyph='sort-by-order-alt' />
          </Button>
          <Button bsStyle='link' onClickOn context={{ action: 'order-tags-alphabetically' }}>
            <Glyphicon glyph='sort-by-alphabet' />
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <FlipMove typeName='ol'>
        {
          map(
            ([tag, occurrence]) => (
              <li key={tag}>
                <Link to={`/on/${tag}`}>{tag}</Link>
                <Label bsStyle='danger'>{occurrence}</Label>
              </li>
            ),
            tagsWithOccurrence
          )
        }
      </FlipMove>
    </div>
  </footer>
)

TagCloud = styled(TagCloud)`
  padding: 5rem 0;
  background-color: rgb(29, 31, 33);
  font-family: Helvetica;
  > div {
    margin: 0 auto;
    width: 700px;
    div.btn-toolbar {
      margin-bottom: 2rem;
      button {
        color: rgb(197, 200, 198);
        display: inline-block;
        font-size: 2rem;
        margin-right: 1rem;
        padding: 0;
        transition-duration: 0.3s;
      }
      button:hover {
        color: #d9534f;
      }
    }
    ol {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        margin-right: 1rem;
        a {
          border-bottom: 1px rgb(197, 200, 198) dashed;
          color: rgb(197, 200, 198);
          display: inline-block;
          margin-right: 0.5rem;
          transition-duration: 0.3s;
        }
        a:hover {
          border-bottom-color: #d9534f;
          border-bottom-style: solid;
          color: #d9534f;
          text-decoration: none;
        }
      }
    }
  }
`
