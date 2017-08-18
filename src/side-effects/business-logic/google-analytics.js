import { keys, pathOr, pipe, propOr, reduce, replace } from 'ramda'
import ReactGA from 'react-ga'
import { put } from 'redux-saga/effects'
import { googleAnalyticsOnUrlChange } from 'side-effects/intents'

ReactGA.initialize('UA-104828466-1')

const substituteUrl = pipe(
  ({ name = '/', options = {} }) => reduce(
    (str, option) => replace(
      `:${option}`,
      propOr('', option, options),
      str
    ),
    name,
    keys(options)
  )
)

export const googleAnalytics = function * ({ name, options }) {
  const origin = pathOr('unknown', ['location', 'origin'], window)
  const url = substituteUrl({ name, options })
  const page = origin + '/#' + url

  ReactGA.set({ page })
  ReactGA.pageview(page)

  yield put({ type: 'GOOGLE_ANALYTICS/PAGE_VIEW', page })
}

export const onUrlChange = googleAnalyticsOnUrlChange(googleAnalytics)
