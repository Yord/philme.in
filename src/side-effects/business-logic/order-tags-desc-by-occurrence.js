import { put } from 'redux-saga/effects'
import { orderTagsDescByOccurrenceOnButtonClick } from 'side-effects/intents'
import { SortTagsDescendingByOccurrence } from 'store/tag-order/change-requests'

export const orderTagsDescByOccurrence = function * () {
  const changeRequest = SortTagsDescendingByOccurrence()
  yield put(changeRequest)
}

export const onButtonClick = orderTagsDescByOccurrenceOnButtonClick(orderTagsDescByOccurrence)
