import { ButtonToolbar } from 'react-bootstrap'
import { map } from 'ramda'
import React from 'react'
import FlipMove from 'react-flip-move'
import styled from 'styled-components'

export let TagCloud = ({
  children: [tagFn, sortButtons],
  className,
  tagsWithOccurrence
}) => (
  <footer className={className}>
    <div>
      <ButtonToolbar>
        {sortButtons}
      </ButtonToolbar>
      <FlipMove typeName='ol'>
        {map(tagFn, tagsWithOccurrence)}
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

export default TagCloud
