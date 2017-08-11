import { location } from 'ratatosk-router/store/location'
import { UpdateLocationType } from 'ratatosk-router/store/location/change-requests'
import { reducer } from 'ratatosk-redux'
import { tagOrder } from 'store/tag-order'
import { SortTagsAlphabeticallyType, SortTagsDescendingByOccurrenceType } from 'store/tag-order/change-requests'

export const app = reducer({
  [UpdateLocationType]: location,
  [SortTagsAlphabeticallyType]: tagOrder,
  [SortTagsDescendingByOccurrenceType]: tagOrder
})
