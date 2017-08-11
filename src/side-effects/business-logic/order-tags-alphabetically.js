import { put } from 'redux-saga/effects'
import { orderTagsAlphabeticallyOnButtonClick } from 'side-effects/intents'
import { SortTagsAlphabetically } from 'store/tag-order/change-requests'

export const orderTagsAlphabetically = function * () {
  const changeRequest = SortTagsAlphabetically()
  yield put(changeRequest)
}

export const onButtonClick = orderTagsAlphabeticallyOnButtonClick(orderTagsAlphabetically)
