import { fork } from 'redux-saga/effects'
import * as orderTagsAlphabetically from 'side-effects/business-logic/order-tags-alphabetically'
import * as orderTagsDescByOccurrence from 'side-effects/business-logic/order-tags-desc-by-occurrence'
import * as googleAnalytics from 'side-effects/business-logic/google-analytics'

export const businessLogic = function * () {
  yield [
    fork(googleAnalytics.onUrlChange),
    fork(orderTagsAlphabetically.onButtonClick),
    fork(orderTagsDescByOccurrence.onButtonClick)
  ]
}
