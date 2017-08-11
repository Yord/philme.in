import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/styles'
import { RamdaReducersSummary } from 'posts/Ramda-Reducers/Summary'

// import appStateJs from './snippets/app-state.raw.js'
// import appJs from './snippets/app.raw.js'
// import changeRequestsJs from './snippets/change-requests.raw.js'
// import locationNameJs from './snippets/location-name.raw.js'
import locationNameOptionsJs from './snippets/location-name-options.raw.js'
import locationPlainJs from './snippets/location-plain.raw.js'
// import reducerJs from './snippets/reducer.raw.js'

export const RamdaReducers = () => (
  <div>
    <RamdaReducersSummary />
    <p>WHY
      Signal to noice ratio makes it hard to grasp what is going on in your code.
      One of the reasons is immutability.
      Example
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {locationPlainJs}
    </SyntaxHighlighter>
    <p>HOW
      Ramda helps you reduce the noice by declarative style and concise point-free programming.
      Also, all its functions are immutable.
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {locationNameOptionsJs}
    </SyntaxHighlighter>
    <p>WHAT
      We build helper functions for redux that make our code more declarative and concise using Ramda.
    </p>
    <p>
      First we need to talk about order of parameters.
      The (state, action) parameter order of reducers is strange.
      Explain, why Ramda wants to have (action, state) order and link to underscore you are doing it wrong!
      http://functionaltalks.org/2013/05/27/brian-lonsdorf-hey-underscore-youre-doing-it-wrong/
    </p>
    <p>
      Well, Redux already has a recipe for nicer reducers!
      http://redux.js.org/docs/recipes/reducers/RefactoringReducersExample.html
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>{
`const todosReducer = createReducer([], {
  'EDIT_TODO': (todosState, action) => {
    const newTodos = updateItemInArray(todosState, action.id, todo => {
      return updateObject(todo, {text : action.text});
    });

    return newTodos;
  }
});`
    }</SyntaxHighlighter>
    <p>
      Demonstrate why (action, state) is more convenient for reducers.
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>{
`import { UPDATE_LOCATION } from './change-requests'

const UpdateLocation = (name, options) => ({ type: UPDATE_LOCATION, name, options })

const setLocation = ({ name, options }) => state => ({
  location: {
    name,
    options
  }
})

const action = UpdateLocation('/on/:tag', { tag: 'ramda' })
const update = setLocation(action)

const state = {
  location: {
    name: '/',
    options: {}
  }
}
const newState = update(state)`
    }</SyntaxHighlighter>
    <p>So what does that mean for reducers?</p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>{
`import { LOCATION_UPDATE } from './change-requests'

export const location = ({ type, name, options }, state) => {
  switch (type) {
    case LOCATION_UPDATE: {
      return { ...state, name, options }
    }
    default: {
      return state
    }
  }
}`
    }</SyntaxHighlighter>
  </div>
)
