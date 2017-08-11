import { fork } from 'redux-saga/effects'
import * as orderTagsAlphabetically from 'side-effects/business-logic/order-tags-alphabetically'
import * as orderTagsDescByOccurrence from 'side-effects/business-logic/order-tags-desc-by-occurrence'

export const businessLogic = function * () {
  yield [
    fork(orderTagsAlphabetically.onButtonClick),
    fork(orderTagsDescByOccurrence.onButtonClick)
  ]
}
