import { set } from 'ramda'
import { reducer } from 'ratatosk-redux'
import { SortTagsAlphabeticallyType, SortTagsDescendingByOccurrenceType } from 'store/tag-order/change-requests'
import { tagOrderOrder } from 'store/tag-order/selectors'

const setAlphabetically = () => set(tagOrderOrder, 'alphabetically')

const setByOccurrence = () => set(tagOrderOrder, 'by occurrence')

export const tagOrder = reducer({
  [SortTagsAlphabeticallyType]: setAlphabetically,
  [SortTagsDescendingByOccurrenceType]: setByOccurrence
})
